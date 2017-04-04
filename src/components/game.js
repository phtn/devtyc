import React, { Component } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Flexbox from 'flexbox-react'
import Upgrade from './upgrade'
import RightKeyboard from './keyboard_1'
import LeftKeyboard from './keyboard_2'
import { btn_1, btn_switch, btn_switch_2, btn_upgrade } from './style'

const flex = {
  justifyContent: 'space-around',
  //border: '1px solid red'
}

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      lines: 0,
      experience: 0.03,
      cash: 0,
      level: 1,
      size: 75,
      end_size: 35,
      btn_width: 200,
      btn_end_width: 100,
      btn_left_end_width: 100,
      btn_height: 100,
      btn_end_height: 100,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLeftClick = this.handleLeftClick.bind(this)
    this.lines = this.lines.bind(this)
  }
  handleClick(){
    this.setState({lines: this.state.lines + 1 + this.state.experience})
    console.log(this.state.size)
    this.setState({end_size: 85})
    setInterval(a=>{
      this.setState({end_size: 35})
    },600)
    this.setState({btn_end_width: 125})
    setInterval(b=> {
      this.setState({btn_end_width: 100})
    },75)
    this.setState({experience: this.state.experience + (this.state.experience / 500)
    })
    this.setState({cash: this.state.cash + (this.state.lines * this.state.experience)})

  }
  handleLeftClick(){
    this.setState({lines: this.state.lines + 1 + this.state.experience})
    console.log(this.state.size)
    this.setState({end_size: 85})
    setInterval(a=>{
      this.setState({end_size: 35})
    },600)
    this.setState({btn_left_end_width: 125})
    setInterval(b=> {
      this.setState({btn_left_end_width: 100})
    },75)
    this.setState({experience: this.state.experience + (this.state.experience / 500)
    })
    this.setState({cash: this.state.cash + (this.state.lines * this.state.experience)})
  }
  lines(){ /*** SCORE ***/

    return (
      <Motion
        defaultStyle={{s: this.state.size}}
        style={{s: spring(this.state.end_size)}}>

        {i => <span style={{fontSize: i.s}}>{Number(this.state.lines).toFixed(0)}</span>}

      </Motion>
    )
  }

  cash(){
    return (
      <Motion
        defaultStyle={{s: 30}}
        style={{s: spring(30)}}>

        {i => <span style={{fontSize: i.s}}>$ {Number(this.state.cash).toFixed(0)}</span>}

      </Motion>
    )
  }
  experience(){
    return (
      <Motion
        defaultStyle={{s: 15}}
        style={{s: spring(15)}}>

        {i => <span style={{fontSize: i.s}}>{Number(this.state.experience).toFixed(8)}</span>}

      </Motion>
    )
  }
  render(){
    return(
      <div>
        <Flexbox flexDirection='row' style={{textAlign:'center'}}>
          <Flexbox style={{...flex}} flexGrow={1}>{this.experience()}</Flexbox>
          <Flexbox style={{...flex}} flexGrow={1}>{this.cash()}</Flexbox>
          <Flexbox style={{...flex}} flexGrow={1}>{this.lines()}</Flexbox>
        </Flexbox>

        <div style={{bottom: 0}}>
        <Flexbox flexDirection='row' style={{textAlign: 'center'}}>

          <Flexbox style={{...flex}} flexGrow={1}>
            <Motion
              defaultStyle={{y:800, w: 100}}
              style={{
                y: spring(500, presets.gentle),
                w: spring(this.state.btn_left_end_width, presets.wobbly)}}>
              { i => /* LEFT KEYBOARD */
                <LeftKeyboard
                  style={{
                    height: this.state.btn_height,
                    width: i.w,
                    top: i.y,
                    ...btn_switch_2
                  }}
                  click={this.handleLeftClick}
                  />
              }
            </Motion>
          </Flexbox>

          <Flexbox style={{...flex}} flexGrow={1}>
            <Motion
              defaultStyle={{y:900, w: 100}}
              style={{y: spring(525, presets.gentle), w: spring(50, presets.wobbly)}}>
            { i => /* UPGRADE */
                <Upgrade
                  style={{
                    transform: 'rotate(180deg)',
                    height: 50,
                    width: i.w,
                    top: i.y,
                  ...btn_upgrade
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
              { i => /* RIGHT KEYBOARD */
                <RightKeyboard
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
export default Game
