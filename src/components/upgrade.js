import React from 'react'
import { Motion } from 'react-motion'
import Cube from '../svg/cube.svg'
export default props => (
  <button
    style={props.style}
    onClick={props.click}
  >
    <img
      src={Cube}
      width="100%"
      height="25px"
      alt={Cube}/>
  </button>
)
