import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PaperList from '../components/paperList'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <PaperList papers={data.allPapersJson.edges} />
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
