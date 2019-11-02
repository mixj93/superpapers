import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import './404.css'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t('Oops, Page Not Found!')} />
      <div className="not-found-page">
        <h1 className="title">404</h1>
        <p className="subtitle">{t('Oops, Page Not Found!')}</p>
        <Link className="back-home-btn button" to="/">
          {t('Back to Home')}
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
