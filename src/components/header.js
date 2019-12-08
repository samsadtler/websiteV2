import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.45rem`, }} >
    <Navbar collapseOnSelect expand="md" style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, }} >
      <Navbar.Brand style={{ margin: 0}}>
        <Nav.Link href="/" style={{ textDecoration: `none`, }} >
          {siteTitle}
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about" className="" style={{ textDecoration: `none`, float: `right` }} >
            About
          </Nav.Link>
          <Nav.Link href="/resume" style={{ textDecoration: `none`, float: `right` }} >
            Resume
          </Nav.Link>
          <Nav.Link href="/contact" style={{ textDecoration: `none`, float: `right` }} >
            Contact
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
