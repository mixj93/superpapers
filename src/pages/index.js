import React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import PaperList from '../components/paperList'
import SEO from '../components/seo'
import './index.css'

const IndexPage = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t('Home')} />

      <PaperList papers={data.allPapersJson.edges} />

      <p className="cannot-find-hint">
        {t('Cannot find the song you want? ')}
        <a href="https://xueli.li/contact/" target="_blank" rel="noopener noreferrer">
          {t('Let me know')}
        </a>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPapersJson(sort: { fields: song, order: ASC }) {
      edges {
        node {
          id
          artist
          kit
          kitAuthor
          paperAuthor
          song
          cover
        }
      }
    }
  }
`

export default IndexPage
