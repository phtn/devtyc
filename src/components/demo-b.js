import React, { Component } from 'react'
import Pointable from '../pointable.js'

class B extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
      <Pointable onPointerDown={()=> console.log('touch down')}>
        touch
      </Pointable>
    )
  }
}
export default B
