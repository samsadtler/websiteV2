import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Container, Row, Col } from 'react-bootstrap'
// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
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
                      <Img fluid={imgMainFluid} style={{ maxWidth: "400px" }} />
                      <p className="hoverPostExcerpt"> {post.description}</p>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </Layout>
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