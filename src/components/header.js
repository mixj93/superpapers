import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/icon.png'
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link className="link clearfix" to="/">
      <img className="logo" src={icon} alt="Super papers" />
      <h1 className="title">{siteTitle}</h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
