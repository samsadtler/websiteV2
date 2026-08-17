import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Row>
          <Col md={12}>
            <h1>Contact</h1>
            <p>
              Email:{" "}
              <a href="mailto:sam.sadtler@gmail.com">sam.sadtler@gmail.com</a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/samsadtler"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/samsadtler
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
