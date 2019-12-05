import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from 'react-bootstrap'

export default function Resume({ data }) {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>Resume</h1>
                    </Col>
                    <Col md={12} className="resume">
                        <h3 style={{ paddingTop: 4 + "pt", paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "justify" }}><a href="http://www.samsadtler.com/" class="a"
                            target="_blank" rel="noopener noreferrer" >Brooklyn, NY </a><a href="mailto:sam.sadtler@gmail.com" class="a" target="_blank" rel="noopener noreferrer" >•
            www.samsadtler.com • github.com/samsadtler • </a>sam.sadtler@gmail.com • 508-423-0947</h3>
                        <p style={{ paddingTop: "10pt", paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "justify" }}>Software developer with seven
                            years of experience in software, electronics and product development. Currently focused on full stack
                            development that combine the power of software and hardware to extend human capabilities. Expertise in software,
                            hardware, mechanical engineering, visual design and systems thinking to make connected and interactive
        experiences.</p>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", lineHeight: 22 + "pt", textAlign: "left" }}>TECHNICAL EXPERTISE SOFTWARE:
    </h4>
                        <ul id="l1">
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Front end: React.js, Redux, JavaScript,
                HTML, SASS, jQuery, Bootstrap, DOM, JSON</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Server: Node, Azure App Services,
                MongoDB, REST, Amazon Lambda, Firebase, Dialogflow</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Dev: Git, Gulp, Bower, Babel, Webpack,
                Azure DevOps, NPM</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Mobile: React Native, Xcode, Android
                Studio, App Center</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Domain: SSL certificates, Subdomains, DNS
                records</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Experience with: C, C#, Java, Unity, SQL,
                Heroku, Arduino, Particle</p>
                                <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                                <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>VISUAL DESIGN<span class="p">:</span></h4>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 47 + "pt", textIndent: -24 + "pt", textAlign: "left" }}>Accomplished Photographer: First Prize in
                “Sustaining/Creating” a juried exhibition sponsored by The Kennedy Center, 2012-2014</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 47 + "pt", textIndent: -24 + "pt", textAlign: "left" }}>Adobe Creative Suite: XD, Illustrator and
                Photoshop, Bohemian Sketch, Final Cut Pro</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 47 + "pt", textIndent: -24 + "pt", textAlign: "left" }}>Teaching Assistant: Advanced Photography,
                Introductory to Video and Sound</p>
                                <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                                <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>MECHANICAL DESIGN<span class="p">:</span>
                                </h4>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Co-author of 5 US Patent and Trademark
                Office patents for electromechanical systems that enhance the movement of paper through printers</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Design Analysis - Design for Lean Six
                Sigma - Electro-Mechanical Green Belt</p>
                            </li>
                            <li>
                                <p style={{ paddingLeft: 49 + "pt", textIndent: -26 + "pt", textAlign: "left" }}>Static analysis, fabrication, mechanical
                system analysis</p>
                            </li>
                        </ul>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>EXPERIENCE</h4>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>TOUCHCODE, New York, NY February 2017 – Present
    </h4>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>Lead Software Developer: <span class="p">Manage
                                agile development and rollout of Touchcode SDKs for iOS, Android, Javascript, and React Native. Direct the
                                design and implementation of sales demo sites: quick customer focused experiences for high impact. Set
                                directions and tasks for remote 5+ person development team. Review code and perform product validations.
                                Lead effort to reduce monthly server costs by 64%, yearly savings of ~$37K while improving server
                                performance. Increased overall system security from a “B” to “A” through a third party audit. Design and
                                implement analytics dashboard for customer facing data in React. Translate demo material to apps in React
            Native.</span></h4>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>PIONEER WORKS, <span class="s1">Tech
            Residency</span>, Brooklyn, NY January 2018 - March 2018 Artist and Developer: “<span class="p">Retrograde”,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                an AI interactive installation featuring existential conversations between Google Home and Amazon Alexa
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                using custom made software. Questions included “Alexa, what is reality?” and “Ok Google, what was your
            relationship to your parents like?” Implemented using AWS Lambda, Dialogflow and Firebase.</span></h4>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <p style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}><b>THOUGHT WORKS,</b><span class="s2"> </span><span
                            class="s1">Artist Residency</span><b>, New York, NY June 2016 - December 2016 Lead Engineer: </b>A
        collaboration with “cyborgs” <span class="s3">Moon Ribas</span> and <span class="s1">Neil Harbisson</span>. Led
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                product development of customized wearable device to extend body’s sense perception. Created server to transmit
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                magnitude and location data of earthquakes to anklet worn device. Wearer experiences vibrations of varying
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                levels of intensity and duration that communicate earthquake’s relative distance and size. Selected material for
        skin and circuit interface.</p>
                        <p style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>Integrated cellular connection to enable mobility
        and antenna selection. Sourced hardware components.</p>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>R/GA, Prototyping Studio, New York, NY May - August
        2015</h4>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>Intern<span class="p">: Provided rapid development
                                of prototypes for clients, ranging from websites and iOS apps. Tested new technologies to explore their
                                viability for future product applications, e.g., evaluated electrically conductive 3D printed
            filament.</span></h4>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>XEROX CORPORATION, Third Party Finishing, Webster,
        NY June 2011 – August 2014 Mechanical Engineer: <span class="p">Designed, defined requirements and tested
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    industrial printing equipment. Mentored by a team of highly skilled engineers and designers. Contributed to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    design and testing of precision transport system using linear synchronous motors on design of new product.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Performed engineering analysis to support project launch of Production Media Cart, a lift that moves 160 lb
            stacks of paper between printers.</span></h4>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <h2 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>EDUCATION</h2>
                        <h4 style={{ paddingTop: 5 + "pt", paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>NEW YORK UNIVERSITY, New York, NY
    </h4>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>Masters, Interactive Telecommunications Program May
        2016</h4>
                        <p style={{ textIndent: 0 + "pt", textAlign: "left" }}><br /></p>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>UNIVERSITY OF ROCHESTER, Rochester, NY</h4>
                        <h4 style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>Bachelor of Science in Mechanical Engineering May
        2012</h4>
                        <p style={{ paddingLeft: 5 + "pt", textIndent: 0 + "pt", textAlign: "left" }}>Cum Laude with Distinction in Mechanical Engineering
    </p>
                    </Col>
                </Row>
            </Container >
        </Layout >
    )
}