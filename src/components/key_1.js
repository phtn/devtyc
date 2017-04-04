import React from 'react'
import { Motion, spring } from 'react-motion'
export default props => (
    <Motion defaultStyle={{width:10}} style={{width: spring(10)}}>
      {i => (
        <button
          style={props.style}
          onClick={props.click}
          className='fa fa-keyboard-o fa-3x'
        >
        </button>
      )}
    </Motion>
)
