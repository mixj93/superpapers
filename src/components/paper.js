import * as React from 'react'
import PropTypes from 'prop-types'
import Pads from './pads'

/*
export interface PaperProps {
  padSize: string
  showPadNumber: boolean
  sides: SP.EPadType[][]
  paragraphs: SP.IPaperParagraph[]
}
*/

const Paper = props => {
  const { padSize, showPadNumber, paragraphs, sides } = props
  return (
    paragraphs &&
    sides && (
      <div className="paper">
        {paragraphs.map((p, pi) => (
          <div key={pi}>
            <h2 className="paragraph_title" level={2}>
              {p.title || `Part ${pi + 1}`}
            </h2>
            <>
              {p.sentences.map((st, sti) => (
                <div key={`${pi}-${sti}`}>
                  <div className="sentence clearfix">
                    {st.words.map((word, wi) => (
                      <div key={`${pi}-${sti}-${wi}`} className="pads-wrap">
                        <Pads
                          padSize={padSize}
                          showPadNumber={showPadNumber}
                          side={sides[word.side || 0]}
                          pressedKeys={word.keys || []}
                        />
                      </div>
                    ))}
                    {st.repeat > 1 && (
                      <span className="repeat" style={{ lineHeight: `${parseInt(padSize) * 5}px` }}>
                        x{st.repeat}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </>
          </div>
        ))}
      </div>
    )
  )
}

Paper.propTypes = {
  padSize: PropTypes.string,
  showPadNumber: PropTypes.bool,
  sides: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf(['red', 'green', 'orange', 'blue-loop']))),
  paragraphs: PropTypes.arrayOf(PropTypes.any)
}

/*
type EPadType = 'red' | 'green' | 'orange' | 'blue-loop'
type EPadNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'A' | 'B' | 'C'
type EPaperWordType = 'pressed' | 'divider'

interface IPaperWord {
  type: EPaperWordType
  side?: number
  keys?: EPadNumber[] // type: 'pressed'
}

interface IPaperSentence {
  words: IPaperWord[]
  repeat: number
}

interface IPaperParagraph {
  title: string
  sentences: IPaperSentence[]
}
*/

export default Paper
