import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
          © Copyright {new Date().getFullYear()}, built with ❤️ by{' '}
          <a href="https://xueli.li" target="_blank">
            {data.site.siteMetadata.author}
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
