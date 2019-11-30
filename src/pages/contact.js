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

                        <form className="form-group" action="https://formspree.io/sam.sadtler@gmail.com"
                            method="POST">
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <input className="form-control" type="text" name="name" placeholder="Your Name" />
                                </li>
                                <li>
                                    <input className="form-control" type="email" name="_replyto" placeholder="Your Email" />
                                </li>
                                <li>
                                    <textarea className="form-control" name="message" placeholder="Your message"></textarea>
                                </li>
                                <li>
                                    <input className="form-control" type="submit" value="Send" />
                                </li>
                            </ul>
                        </form>


                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
  query ContactQuery {
        github: file(relativePath: {eq: "github.png" }) {
            childImageSharp {
                fixed(width: 64, height: 64) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        stackoverflow: file(relativePath: {eq: "stackoverflow.png" }) {
            childImageSharp {
                fixed(width: 64, height: 64) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`