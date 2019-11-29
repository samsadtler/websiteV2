import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Container, Row, Col } from 'react-bootstrap'
// import '../css/index.css'; // add some style if you want!

export default function About({ data }) {
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Layout>
        </Layout>
    )
}

export const pageQuery = graphql`
  query AboutQuery {
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