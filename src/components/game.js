import React, { Component } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Flexbox from 'flexbox-react'
import Upgrade from './upgrade'
import RightKeyboard from './keyboard_1'
import LeftKeyboard from './keyboard_2'
import Medal from '../svg/medal.svg'
import Exp from '../svg/brain.svg'
import Fund from '../svg/fund.svg'
import Code from '../svg/code.svg'
import { btn_switch_2, btn_upgrade, cashLabel, flex, flexFooter, flexKeys, expLabel, levelLabel, imgHeader, linesLabel } from './style'



class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      lines: 0,
      experience: 0.03,
      cash: 0,
      level: 1,
      size: 75,
      end_size: 18,
      btn_width: 200,
      btn_end_width: 100,
      btn_left_end_width: 100,
      btn_height: 100,
      btn_end_height: 100,
      upgrade_extended: 50,
      upgrade_deg: 0,
      multiplier: 1,
      lineSpacing: 0
    }
    this.handleRightClick = this.handleRightClick.bind(this)
    this.handleLeftClick = this.handleLeftClick.bind(this)
    this.upgradeClick = this.upgradeClick.bind(this)
    this.lines = this.lines.bind(this)
  }
  handleRightClick(){ /* RIGHT KEYBOARD CLICK */
    this.setState({lines: this.state.lines + this.state.multiplier + this.state.experience})
    this.setState({lineSpacing: 4})
    setTimeout(a=>{
      this.setState({lineSpacing: 0})
    },300)
    this.setState({end_size: 25})
    setTimeout(a=>{
      this.setState({end_size: 18})
    },0)
    this.setState({btn_end_width: 125})
    setInterval(b=> {
      this.setState({btn_end_width: 100})
    },75)
    this.setState({experience: this.state.experience + (this.state.experience / 500)
    })
    this.setState({cash: this.state.cash + (this.state.lines * this.state.experience)})
  }

  handleLeftClick(){ /* LEFT KEYBOARD CLICK */

    this.setState({ /* LINES of CODE STATE */
      lines: this.state.lines + this.state.multiplier + this.state.experience })

    this.setState({ /* LINES LABEL SIZE */
      end_size: 45})
      setInterval(a=>{
        this.setState({end_size: 25})
      },100)

    this.setState({ /* LEFT BUTTON MOTION STATE*/
      btn_left_end_width: 125})
      setInterval(b=> {
        this.setState({btn_left_end_width: 100})
      },75)

    this.setState({ /* EXPERIENCE INCREMENT STATE */
      experience: this.state.experience + (this.state.experience / 500)
    })
    this.setState({ /* CASH INCREMENT STATE */
      cash: this.state.cash + (this.state.lines * this.state.experience)})
  }
  lines(){ /*** LINES OF CODE LABEL ***/
    return (
      <Motion
        defaultStyle={{s: this.state.size, ls: 0}}
        style={{
          s: spring(this.state.end_size, presets.gentle),
          ls: spring(this.state.lineSpacing)
        }}>

        {i => <span style={{fontSize: i.s, letterSpacing: `${i.ls}px`, ...linesLabel}}>{this.numberReducer(this.state.lines)}</span>}

      </Motion>
    )
  }
  numberReducer(number){
    const digits = Math.round(number).toString().length
    const numberStr = Math.round(number).toString()
    switch(digits){
      case 4: {
          return numberStr.slice(0,1) + ',' + numberStr.slice(1,4)
      }
      case 5: {
          return numberStr.slice(0,2) + ',' + numberStr.slice(2,4)
      }
      case 6: {
          return numberStr.slice(0,3) + 'K'
      }
      case 7: {
          return numberStr.slice(0,1) + '.' + numberStr.slice(1,3) + 'M'
      }
      case 8: {
          return numberStr.slice(0,2) + '.' + numberStr.slice(2,4) + 'M'
      }
      case 9: {
          return numberStr.slice(0,3)  + 'M'
      }
      case 10: {
          return numberStr.slice(0,1) + '.' + numberStr.slice(1,3) + 'B'
      }
      case 11: {
          return numberStr.slice(0,2) + '.' + numberStr.slice(2,4) + 'B'
      }
      case 12: {
          return numberStr.slice(0,3)  + 'q'
      }
      case 13: {
          return numberStr.slice(0,1) + '.' + numberStr.slice(1,3) + 'q'
      }
      case 14: {
          return numberStr.slice(0,2) + '.' + numberStr.slice(2,4) + 'q'
      }
      default: return numberStr
    }
  }
  cash(){
    return (
      <Motion
        defaultStyle={{s: 30}}
        style={{s: spring(30)}}>

        {i => <span style={{fontSize: i.s, ...cashLabel}}>$ {this.numberReducer(this.state.cash)}</span>}

      </Motion>
    )
  }
  experience(){
    return (
      <Motion
        defaultStyle={{s: 15}}
        style={{s: spring(15)}}>

        {i => <span style={{fontSize: i.s, ...expLabel}}>{Number(this.state.experience).toFixed(3) }</span>}

      </Motion>
    )
  }
  upgradeLevel(level){
    const cashValues = [100, 500, 1000, 5000, 20000, 50000, 100000, 1000000, 20000000, 500000000]
    return cashValues[this.state.level-1]
  }
  upgradeClick(){
    if(this.state.cash > this.upgradeLevel(this.state.level)) {
      this.setState({ multiplier: this.state.multiplier * 2 })
      this.setState({ level: this.state.level + 1})
      this.setState({cash: this.state.cash - this.upgradeLevel(this.state.level)})
    }


    this.setState({ upgrade_extended: 60})
    setInterval(a=> {
      this.setState({upgrade_extended: 50})
    }, 100)
  }
  render(){
    return(
      <div>

        <Flexbox flexDirection='row' justifyContent='flex-start'>
          <Flexbox style={{...flex}} flexGrow={1} flexDirection='column'>
            <img alt={Medal} style={{...imgHeader}} src={Medal} height='20px' width='20px'/>
            <span style={{...levelLabel}}>&nbsp;{this.state.level}</span>
          </Flexbox>
          <Flexbox style={{...flex}} flexGrow={2} flexDirection='column'>
            <img alt={Medal} style={{...imgHeader}} src={Exp} height='20px' width='20px'/>
            {this.experience()}
          </Flexbox>
          <Flexbox style={{...flex}} flexGrow={2} flexDirection='column'>
            <img alt={Medal} style={{...imgHeader}} src={Fund} height='20px' width='20px'/>
            {this.cash()}
          </Flexbox>
          <Flexbox style={{...flex}} flexGrow={2} flexDirection='column'>
            <img alt={Medal} style={{...imgHeader}} src={Code} height='20px' width='20px'/>
            {this.lines()}
          </Flexbox>
        </Flexbox>

        <div style={{...flexKeys}}>
        <Flexbox flexDirection='row' >

          <Flexbox style={{...flexFooter}} flexGrow={1}>
            <Motion
              defaultStyle={{y:1200, w: 100}}
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

          <Flexbox style={{...flexFooter}} flexGrow={1}>
            <Motion
              defaultStyle={{y:1000, w: 50, d: -720}}
              style={{
                y: spring(525, presets.gentle),
                w: spring(this.state.upgrade_extended, presets.wobbly),
                d: spring(this.state.upgrade_deg, presets.stiff)}}>
            { i => /* UPGRADE BUTTON */
                <Upgrade
                  style={{
                    transform: `rotate(${i.d}deg)`,
                    height: 50,
                    width: i.w,
                    top: i.y,
                    color: '#00a0f0',
                  ...btn_upgrade
                  }}
                  click={this.upgradeClick}
                  />
              }
            </Motion>
          </Flexbox>

          <Flexbox style={{...flexFooter}} flexGrow={1}>
            <Motion
              defaultStyle={{y:800, w: 100}}
              style={{
                y: spring(500, presets.gentle),
                w: spring(this.state.btn_end_width, presets.wobbly)}}>
              { i => /* RIGHT KEYBOARD */
                <RightKeyboard
                  style={{
                    height: this.state.btn_height,
                    width: i.w,
                    top: i.y,
                    ...btn_switch_2
                  }}
                  click={this.handleRightClick}
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
