import React from 'react'
export default props => (
  <button
    style={props.style}
    onClick={props.click}
  >
    <img
      src={props.img}
      width="100%"
      height="50px"
      alt={props.img}/>
  </button>
)
