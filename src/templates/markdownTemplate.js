import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
// import '../css/blog-post.css';
export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          {console.log("frontmatter", post)}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`