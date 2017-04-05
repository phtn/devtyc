import React from 'react'
import Pointable from '../pointable.js'
import './style.css'

export default props => (


    <button style={props.style}>
      <Pointable
        onPointerDown={props.click}
        className="touch"
        style={{
          justifyContent: 'space-around',
        }}>
      <img
        src={props.img}
        width="100%"
        height="50px"
        alt={props.img}/>
      </Pointable>
    </button>


)
