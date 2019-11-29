import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post
        }) => {
          let imgMainFluid = post.frontmatter.imgMain.childImageSharp.fluid
          return (
            <div className="blog-post-preview" key={post.id
            }>
              <h1>
                {console.log('data.allMarkdownRemark', data.allMarkdownRemark)}
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                <Img fluid={imgMainFluid} />
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            imgMain {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
        }
      }
    }
  }
    file(relativePath: { eq: "trailz.png"
}) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
      }
    }
  }
}
`