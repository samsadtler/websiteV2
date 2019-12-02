import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = (source) => {
  const data = useStaticQuery(graphql`
    query {
      moontest: file(relativePath: { eq: "tw-moon-test-layout" }) {
         ...fluidImage
      }
      moonfoot: file(relativePath: { eq: "tw-moon-foot.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return <Img fluid={data.moonfoot.childImageSharp.fluid} />
}

export default Image

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;