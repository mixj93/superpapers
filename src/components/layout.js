import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

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
      <div style={{ margin: `0 auto`, maxWidth: 960 }}>
        <main style={{ minHeight: 400 }}>{children}</main>
        <footer style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()}, built with <a href="https://www.gatsbyjs.org">Gatsby</a> & ❤️ by{' '}
          {data.site.siteMetadata.author}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
