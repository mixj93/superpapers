import React from 'react'
import PropTypes from 'prop-types'
import { RedPad, GreenPad, OrangePad, BlueLoopPad } from './pad'
import { indexToNumber } from '../utils'

/*
export interface PapsProps {
  padSize: string
  showPadNumber: boolean
  side: SP.EPadType[]
  pressedKeys: SP.EPadNumber[]
}
*/

const Pads = props => {
  const { padSize, showPadNumber, side, pressedKeys } = props

  const isKeyPressed = (currentKeyIndex, pressedKeys) => pressedKeys.indexOf(indexToNumber(currentKeyIndex)) > -1

  const padsWidth = parseInt(padSize) * 4 + 'px'
  const padsHeight = parseInt(padSize) * 5 + 'px'
  const padsGap = parseInt(padSize) / 10 + 'px'

  return (
    <div
      className="pads"
      style={{
        width: padsWidth,
        height: padsHeight,
        gridTemplateColumns: `repeat(3, ${padSize})`,
        gridTemplateRows: `repeat(4, ${padSize})`,
        gridRowGap: padsGap,
        gridColumnGap: padsGap
      }}
    >
      {side.map((pad, i) => {
        switch (pad) {
          case 'red':
            return (
              <RedPad
                key={i}
                size={padSize}
                number={showPadNumber && indexToNumber(i)}
                pressed={isKeyPressed(i, pressedKeys)}
              />
            )
          case 'orange':
            return (
              <OrangePad
                key={i}
                size={padSize}
                number={showPadNumber && indexToNumber(i)}
                pressed={isKeyPressed(i, pressedKeys)}
              />
            )
          case 'green':
            return (
              <GreenPad
                key={i}
                size={padSize}
                number={showPadNumber && indexToNumber(i)}
                pressed={isKeyPressed(i, pressedKeys)}
              />
            )
          case 'blue-loop':
            return (
              <BlueLoopPad
                key={i}
                size={padSize}
                number={showPadNumber && indexToNumber(i)}
                pressed={isKeyPressed(i, pressedKeys)}
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}

Pads.defaultProps = {
  padSize: '32px'
}

Pads.propTypes = {
  padSize: PropTypes.string,
  showPadNumber: PropTypes.bool,
  side: PropTypes.arrayOf(PropTypes.oneOf(['red', 'green', 'orange', 'blue-loop'])),
  pressedKeys: PropTypes.arrayOf(PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C']))
}

export default Pads
