import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header style={{ background: `green`, marginBottom: `1.45rem`, }} >
    <Navbar style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, color: `white`,}} >
      <Navbar.Brand style={{ margin: 0 }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
          {siteTitle}
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/about" className="" style={{ color: `white`, textDecoration: `none`, float:`right`}} >
          About
          </Nav.Link>
        <Nav.Link href="/resume" style={{ color: `white`, textDecoration: `none`, float:`right`}} >
          Resume
          </Nav.Link>
        <Nav.Link href="/contact" style={{ color: `white`, textDecoration: `none`, float:`right`}} >
          Contact
        </Nav.Link>
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
