import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Paper from '../components/paper'
import SEO from '../components/seo'

export default ({ data }) => {
  const paper = data.papersJson
  console.log(paper)
  return (
    <Layout>
      <SEO title={`${paper.song} - ${paper.artist}`} />

      <h1 style={{ textAlign: 'center' }}>{`${paper.song} - ${paper.artist}`}</h1>
      <p style={{ textAlign: 'center' }}>{`Kit: ${paper.kit} maded by ${paper.author}`}</p>
      <Paper padSize="20px" showPadNumber={false} sides={paper && paper.sides} paragraphs={paper && paper.paragraphs} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    papersJson(id: { eq: $id }) {
      id
      artist
      author
      kit
      song
      sides
      paragraphs {
        title
        sentences {
          repeat
          words {
            type
            keys
          }
        }
      }
    }
  }
`
