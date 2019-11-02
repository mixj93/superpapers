import React from 'react'
import { Link } from 'gatsby'
import { Trans } from 'react-i18next'
import './paperList.css'

const PaperList = ({ papers }) => {
  return (
    <div className="paper-list">
      {papers.map(({ node }) => (
        <div key={node.id} className="paper-item">
          <div className="info">
            <img className="cover" src={node.cover} alt={node.song} />
            <div className="description">
              <h3 className="song-title">{node.song}</h3>
              <p className="song-info">
                {node.artist.join(', ')}
                <span className="divider">|</span>
                KIT: {node.kit}{' '}
                <span className={`kit-author${node.kitAuthor === 'Super Pads' ? ' official' : ''}`}>
                  {node.kitAuthor}
                </span>
                <span className="divider">|</span>
                {node.paperAuthor}
              </p>
            </div>
          </div>
          <Link className="view-btn button" to={`/${node.id}`}>
            <Trans>View</Trans>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PaperList
