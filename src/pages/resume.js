import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Container, Row, Col } from 'react-bootstrap'

export default function About({ data }) {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={12}>

                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
  query ResumeQuery {
        file(relativePath: {eq: "headshot.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
}
`