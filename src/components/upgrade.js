import React from 'react'
import Pointable from '../pointable'
export default props => (
  <button
    style={props.style}
    onClick={props.click}
    className='fa fa-archive fa-2x'
  >
  <Pointable
    onPointerDown={props.click}
    className="touch"
    style={{
      justifyContent: 'space-around',
    }}>
  </Pointable>
  </button>
)
