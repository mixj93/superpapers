import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import './404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Page Not found" />
    <div className="not-found-page">
      <h1 className="title">404</h1>
      <p className="subtitle">Oops, Page Not Found!</p>
      <Link className="back-home-btn button" to="/">
        Back to Home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
