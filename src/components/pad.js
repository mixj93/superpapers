import React from 'react'
import PropTypes from 'prop-types'

// * Pad: base Pad Component, should not use directly
const Pad = props => {
  const { size, color, isLoop, pressed, number } = props

  return (
    <div
      style={{ width: size, height: size, fontSize: size }}
      className={`pad color-${color}${pressed ? ' pressed' : ''}`}
    >
      {isLoop && <span className="loop-icon"></span>}
      {number && <span>{number}</span>}
    </div>
  )
}

Pad.defaultProps = {
  size: '48px'
}

Pad.propTypes = {
  size: PropTypes.string,
  color: PropTypes.oneOf(['red', 'orange', 'blue', 'green']).isRequired,
  isLoop: PropTypes.bool,
  pressed: PropTypes.bool,
  number: PropTypes.any
}

// * RedPad
const RedPad = props => {
  const { size, pressed, number } = props

  return <Pad color="red" size={size} pressed={pressed} number={number} />
}

RedPad.propTypes = {
  size: PropTypes.string,
  pressed: PropTypes.bool,
  number: PropTypes.any
}

// * GreenPad
const GreenPad = props => {
  const { size, pressed, number } = props

  return <Pad color="green" size={size} pressed={pressed} number={number} />
}

GreenPad.propTypes = {
  size: PropTypes.string,
  pressed: PropTypes.bool,
  number: PropTypes.any
}

// * OrangePad
const OrangePad = props => {
  const { size, pressed, number } = props

  return <Pad color="orange" size={size} pressed={pressed} number={number} />
}

OrangePad.propTypes = {
  size: PropTypes.string,
  pressed: PropTypes.bool,
  number: PropTypes.any
}

// * BlueLoopPad
const BlueLoopPad = props => {
  const { size, pressed, number } = props

  return <Pad color="blue" isLoop={true} size={size} pressed={pressed} number={number} />
}

BlueLoopPad.propTypes = {
  size: PropTypes.string,
  pressed: PropTypes.bool,
  number: PropTypes.any
}

export { RedPad, GreenPad, OrangePad, BlueLoopPad }
