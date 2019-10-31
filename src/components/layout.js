import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import './layout.css'

import Header from './header'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main">{children}</main>
      <footer className="footer">
        © Copyright {new Date().getFullYear()}, built with ❤️ by{' '}
        <a href="https://xueli.li/contact/" target="_blank" rel="noopener noreferrer">
          {data.site.siteMetadata.author}
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
