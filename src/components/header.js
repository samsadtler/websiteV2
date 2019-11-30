import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.45rem`, }} >
    <Navbar style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, }} >
      <Navbar.Brand style={{ margin: 0, fontSize: '2.5em' }}>
        <Link to="/" style={{ textDecoration: `none`, }} >
          {siteTitle}
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/about" className="" style={{ textDecoration: `none`, float: `right` }} >
          About
          </Link>
        <Link to="/resume" style={{ textDecoration: `none`, float: `right` }} >
          Resume
          </Link>
        <Link to="/contact" style={{ textDecoration: `none`, float: `right` }} >
          Contact
        </Link>
      </Nav>
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
