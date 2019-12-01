import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import '../css/blog-post.css';
export default function Template({ data }) {
  // const { markdownRemark: post } = data
  const { mdx: post } = data
  return (
    <Layout>
      <div key={post.frontmatter.title} className="blog-post-container">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          {console.log("frontmatter", post)}
          <div
            className="blog-post-content"
          />
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`