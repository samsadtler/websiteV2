import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Container, Row, Col } from 'react-bootstrap'
// import '../css/index.css'; // add some style if you want!

export default function About({ data }) {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>About</h1>
                        <Img fluid={data.file.childImageSharp.fluid} style={{ borderRadius: '50%' }}></Img>
                    </Col>
                    <Col md={8}>
                        <p>
                            I am currently the Lead Software Developer at a startup called <a href="https://touchcode.com/">Touchcode</a> working
                            with web development and printed mobile engagement technology. Tasked with
                            creating all types of customer experiences from quick sales demos to dashboards, I
                            learned to be flexible in my approach to solving problems. The demos built with
                            Gulp, Babel, and Bootstrap and deployed on Azure,<a herf="https://try.tc/demo/"> try.tc </a>utilized CSS animations
                            which promote a seamless connection from the physical to the digital. I have also
                            worked to develop a secure analytics dashboards built in React and Redux which
                            showcases engagement data for our customers in meaningful ways. Having to both
                            manage a remote development team while engaging the sale and marketing teams
                            to meet customer requirements, I am continually developing strong communication
                            skills which focus on distilling actionable items.
                        </p>
                        <p>
                            On the lighthearted end I try to make novel experiences with new and dated
                            technologies which call attention to our relationships to these often cold objects. I
                            recently utilized an Amazon Alexa and a Google Home, to created an installation
                            during my <a href="https://pioneerworks.org/residency/sam-sadtler/"> Pioneer Works Tech Residency</a>.
                            The two A.I.s interacted with each other through custom made skills which focused on existential questions. They were
                            installed at Pioneer Works for Second Sunday. Another example is, during my time at NYU's <a href="https://tisch.nyu.edu/itp">Interactive Telecommunications Program</a> I developed an iOS app called Shakie
                            designed to bring the joy back to taking selfies.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
  query AboutQuery {
        file(relativePath: {eq: "headshot-crop.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
}
`