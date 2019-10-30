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
      {isLoop && (
        <svg
          t="1572416754251"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1978"
          width={size}
          height={size}
          style={{ opacity: 0.6 }}
        >
          <path
            d="M842.459429 608.109714c-8.777143 178.029714-163.401143 319.853714-352.402286 319.853715-194.852571 0-352.841143-150.454857-352.841143-336.091429 0-180.077714 148.845714-327.168 335.725714-335.725714v159.817143l369.590857-192L473.014857 0v160.036571C230.473143 168.667429 36.571429 358.619429 36.571429 591.872 36.571429 830.537143 239.689143 1024 490.130286 1024c244.882286 0 444.342857-184.832 453.266285-415.890286h-100.937142z"
            p-id="1979"
            fill="#ffffff"
          ></path>
        </svg>
      )}
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
