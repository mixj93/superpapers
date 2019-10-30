import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <div>
        {data.allPapersJson.edges.map(({ node }) => (
          <div key={node.id} className="clearfix">
            <Link to={`/${node.id}`}>
              <img src={node.cover} alt={node.song} style={{ width: 80, height: 80, float: 'left', marginRight: 8 }} />
              <h3>
                {node.song} <span>— {node.artist}</span>
              </h3>
              <p>
                {node.kit} / {node.author}
              </p>
            </Link>
          </div>
        ))}
      </div>
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
          author
          kit
          song
          cover
        }
      }
    }
  }
`

export default IndexPage
