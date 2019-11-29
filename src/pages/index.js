import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from 'react-bootstrap'
// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (

    <div className="blog-posts">
      <Container fluid>
        <Row>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post
            }) => {

              let imgMainFluid = post.frontmatter.imgMain.childImageSharp.fluid
              return (
                <Col md={4} sm={6}>
                  <div className="blog-post-preview" key={post.id}>
                    <h1>
                      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                    </h1>
                    <h2>{post.frontmatter.date}</h2>
                    <Img fluid={imgMainFluid} style={{ maxWidth: "400px" }} />
                    <p>{post.excerpt}</p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
          allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
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
    file(relativePath: {eq: "trailz.png"
}) {
          childImageSharp {
          fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
        }
      }
    }
`