import React from 'react'
import { Motion } from 'react-motion'
import ZeroOne from '../svg/01.svg'
export default props => (
  <button
    style={props.style}
    onClick={props.click}
  >
    <img
      src={ZeroOne}
      width="100%"
      height="50px"
      alt={ZeroOne}/>
  </button>
)
