import React, { Component } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Flexbox from 'flexbox-react'
import Key from './key_1'
import { btn_1, btn_switch, btn_switch_2 } from './style'

const flex = {
  justifyContent: 'space-around',
  border: '1px solid red'
}

class Two extends Component {
  constructor(props){
    super(props)
    this.state = {
      score: 0,
      size: 75,
      end_size: 35,
      btn_width: 200,
      btn_end_width: 100,
      btn_height: 100,
      btn_end_height: 100,
    }
    this.handleClick = this.handleClick.bind(this)
    this.score = this.score.bind(this)
  }
  handleClick(){
    this.setState({score: this.state.score + 1})
    console.log(this.state.size)
    this.setState({end_size: 85})
    setInterval(a=>{
      this.setState({end_size: 35})
    },600)
    this.setState({btn_end_width: 125})
    setInterval(b=> {
      this.setState({btn_end_width: 100})
    },75)

  }
  score(){ /*** SCORE ***/

    return (
      <Motion
        defaultStyle={{s: this.state.size}}
        style={{s: spring(this.state.end_size)}}>

        {i => <span style={{fontSize: i.s}}>{this.state.score}</span>}

      </Motion>
    )
  }
  render(){
    return(
      <div>
        <Flexbox flexDirection='row' style={{textAlign:'center'}}>
          <Flexbox style={{...flex}} flexGrow={1}>{this.score()}</Flexbox>
          <Flexbox style={{...flex}} flexGrow={1}>{this.score()}</Flexbox>
          <Flexbox style={{...flex}} flexGrow={1}>{this.score()}</Flexbox>
        </Flexbox>
        <div style={{bottom: 0, border: '1px solid red'}}>
        <Flexbox flexDirection='row' style={{textAlign: 'center'}}>
          <Flexbox style={{...flex}} flexGrow={1}>
            <Motion
              defaultStyle={{y:1000, w: 100}}
              style={{y: spring(500, presets.gentle), w: spring(100, presets.wobbly)}}>
              { i =>
                <Key
                  style={{
                    transform: 'rotate(180deg)',
                    height: this.state.btn_height,
                    width: i.w,
                    top: i.y,
                    ...btn_1
                  }}
                  click={this.handleClick}
                  />
              }
            </Motion>
          </Flexbox>

          <Flexbox style={{...flex}} flexGrow={1}>
            <Motion
              defaultStyle={{y:900, w: 100}}
              style={{y: spring(500, presets.gentle), w: spring(100, presets.wobbly)}}>
              { i =>
                <Key
                  style={{
                    transform: 'rotate(180deg)',
                    height: this.state.btn_height,
                    width: i.w,
                    top: i.y,
                    ...btn_switch_2
                  }}
                  click={this.handleClick}
                  />
              }
            </Motion>
          </Flexbox>

          <Flexbox style={{...flex}} flexGrow={1}>
            <Motion
              defaultStyle={{y:800, w: 100}}
              style={{y: spring(500, presets.gentle), w: spring(this.state.btn_end_width, presets.wobbly)}}>
              { i =>
                <Key
                  style={{
                    height: this.state.btn_height,
                    width: i.w,
                    top: i.y,
                    ...btn_switch_2
                  }}
                  click={this.handleClick}
                  />
              }
            </Motion>
          </Flexbox>

        </Flexbox>
        </div>
      </div>
    )
  }
}
export default Two
