import React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Paper from '../components/paper'
import SEO from '../components/seo'
import './paper.css'

export default ({ data }) => {
  const paper = data.papersJson
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={`${paper.song} - ${paper.artist}`} />
      <div className="paper-detail">
        <div className="paper-head">
          <h1 className="paper-title">{paper.song}</h1>
          <div className="paper-info clearfix">
            <div className="item artist">
              <div className="label">ARTIST</div>
              <h3 className="value">{paper.artist}</h3>
            </div>
            <div className="item kit">
              <div className="label">KIT</div>
              <h3 className="value">{paper.kit}</h3>
            </div>
            <div className="item maker">
              <div className="label">PAPER MAKER</div>
              <h3 className="value">{paper.paperAuthor}</h3>
            </div>
          </div>
        </div>

        <Paper
          padSize="20px"
          showPadNumber={false}
          sides={paper && paper.sides}
          paragraphs={paper && paper.paragraphs}
        />

        <p className="cannot-find-hint">
          {t('Mistakes in this paper? ')}
          <a href="https://xueli.li/contact/" target="_blank" rel="noopener noreferrer">
            {t('Let me know')}
          </a>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    papersJson(id: { eq: $id }) {
      id
      artist
      kit
      paperAuthor
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
