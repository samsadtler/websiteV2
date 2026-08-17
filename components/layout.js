import { Row, Col } from "react-bootstrap";
import Header from "./header";

const SITE_TITLE = "Sam Sadtler";

const Layout = ({ children }) => (
  <>
    <Header siteTitle={SITE_TITLE} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <Row>
        <Col md={12}>
          <main>{children}</main>
        </Col>
      </Row>
      <footer>© {new Date().getFullYear()} Sam Sadtler</footer>
    </div>
  </>
);

export default Layout;
