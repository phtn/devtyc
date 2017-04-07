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
import mojs from 'mo-js'

import { leftKey, btn_upgrade, rightKey, cashLabel, flex, flexFooter, flexKeys, expLabel, levelLabel, imgHeader, linesLabel, achievementStyle } from './style'

const width = window.innerWidth
const height = window.innerHeight

import K1 from '../svg/k1.svg'
import K2 from '../svg/k2.svg'
import K3 from '../svg/k3.svg'
import K4 from '../svg/k4.svg'
const keyboards = [K1,K1,K1, K2,K2,K2,K2,K2,K2, K3,K3,K3,K3,K3,K3,K3,K3,K3, K4,K4,K4,K4,K4,K4,K4,K4,K4,K4,K4,K4,]
const keyboardColors = ['green','green', '#2a5934','#2a5934','#2a5934', 'teal','teal','teal','teal', '#003666','#003666','#003666','#003666','#003666', '#050f2c','#050f2c','#050f2c', '#4d4f53','#4d4f53','#204056', '#555', '#444', '#333', '#111', '#000']
const achievements = ['HTML', 'CSS', 'Javascript', 'Python', 'Ruby', 'Ruby on Rails', 'Nodejs', 'React', 'MERN']
const rightTap = new mojs.Burst({
  radius: {60:80},
  count: 4,
  angle: 45,
  children: {
    shape: 'curve',
    fill: 'none',
    radiusY: {0:[-3]},
    points: 3,
    stroke: 'gray',
    strokeWidth: 1,
    opacity: {.5: 0},
    angle: 90,
  },
  left: width/1.23,
  top: height/1.185,
  duration: 100,
})

const leftTap = new mojs.Burst({
  radius: {60:80},
  count: 4,
  angle: 45,
  children: {
    shape: 'curve',
    fill: 'none',
    radiusY: {0:[-3]},
    points: 3,
    stroke: 'gray',
    strokeWidth: 1,
    opacity: {.5: 0},
    angle: 90,
  },
  left: width/5.26,
  top: height/1.185,
  duration: 100,
})
const upgradeBurst_3 = new mojs.Burst({
  radius: {40:60},
  count: 4,
  children: {
    shape: 'circle',
    fill: 'none',
    stroke: '#00a0f0',
    strokeWidth: 1,
    opacity: {.5: 0},
    angle: 120,
    radius: {0:'rand(3,10)'},
    delay: 'stagger(rand(0,100))'
  },
  top: height/1.140,
  duration: 1000,
  degree: 20
})
const upgradeBurst_2 = new mojs.Burst({
  radius: {20:60},
  count: 3,
  angle: {0:-60},
  children: {
    shape: 'circle',
    fill: 'none',
    stroke: '#00a0f0',
    strokeWidth: 1,
    opacity: {.5: 0},
    angle: 120,
    radius: 'rand(0,15)',
    delay: 'stagger(rand(0,100))'
  },
  top: height/1.185,
  duration: 100,
  degree: 60
})

const upgradeSwirl = new mojs.ShapeSwirl({
  fill: '#00a0f0',
  y: {0:-650},
  duration: 3000,
  degreeShift: -25,
  top: height/1.2,
  swirlFrequency: 3,
  radius: 10,
})

const linesSwirl = new mojs.ShapeSwirl({
  fill: '#00a0f0',
  y: {0:-650},
  duration: 4000,
  degreeShift: 5,
  top: height/1.2,
  swirlFrequency: 3,
  radius: 10,
})

const learnSwirl = new mojs.ShapeSwirl({
  fill: 'none',
  stroke: '#8a7967',
  strokeWidth: 3      ,
  shape: 'polygon',
  points: 6,
  y: {0:-650},
  duration: 4000,
  degreeShift: -19,
  top: height/1.2,
  swirlFrequency: 3,
  radius: 6,
  angle: {0:360},
})

const cashSwirl = new mojs.ShapeSwirl({
  fill: 'green',
  y: {0:-650},
  duration: 4500,
  degreeShift: -8,
  top: height/1.2,
  swirlFrequency: 3,
  radius: 5,
})


class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      lines: 0,
      experience: 0.0245,
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
      lineSpacing: 0,
      upgradeBox: 'gray',
      keyRadius: 50,
      achievement: '',
      toast: false,
      achievementHeight: 0,
    }
    this.handleRightClick = this.handleRightClick.bind(this)
    this.handleLeftClick = this.handleLeftClick.bind(this)
    this.upgradeClick = this.upgradeClick.bind(this)
    this.hideToast = this.hideToast.bind(this)
    //this.achievements = this.achievements.bind(this)
    this.lines = this.lines.bind(this)
  }
  handleRightClick(){ /* RIGHT KEYBOARD CLICK */
    this.setState({lines: this.state.lines + this.state.multiplier + this.state.experience})
    this.setState({lineSpacing: 2})
    setTimeout(a=>{
      this.setState({lineSpacing: 0})
    },10)
    this.setState({end_size: 25})
    setTimeout(a=>{
      this.setState({end_size: 18})
    },0)
    this.setState({btn_end_width: 101})
    setInterval(b=> {
      this.setState({btn_end_width: 100})
    },75)
    this.setState({btn_end_height: 101})
    setInterval(b=> {
      this.setState({btn_end_height: 100})
    },75)
    this.setState({experience: this.state.experience + (this.state.experience / 500)
    })
    this.setState({cash: this.state.cash + (this.state.lines * this.state.experience)})
    if(this.state.cash >= this.upgradeLevel(this.state.level)){
      this.setState({upgradeBox: '#00a0f0'})
      this.setState({upgrade_extended: 70})
      // eslint-disable-next-line
      const timeline = new mojs.Timeline({}).add(upgradeBurst_3).play()
    }
    // eslint-disable-next-line
    const timeline = new mojs.Timeline({}).add(rightTap).play()
    this.achievements(this.state.lines)

    this.setState({toast: true})
  }

  handleLeftClick(){ /* LEFT KEYBOARD CLICK */

    this.setState({ /* LINES of CODE STATE */
      lines: this.state.lines + this.state.multiplier + this.state.experience })

    this.setState({ /* LINES LABEL SIZE */
      end_size: 25})
      setInterval(a=>{
        this.setState({end_size: 18})
      },100)

    this.setState({ /* LEFT BUTTON MOTION STATE*/
      btn_left_end_width: 101})
      setInterval(b=> {
        this.setState({btn_left_end_width: 100})
      },75)

    this.setState({ /* EXPERIENCE INCREMENT STATE */
      experience: this.state.experience + (this.state.experience / 500)
    })
    this.setState({ /* CASH INCREMENT STATE */
      cash: this.state.cash + (this.state.lines * this.state.experience)})

    if(this.state.cash >= this.upgradeLevel(this.state.level)){
      this.setState({upgradeBox: '#00a0f0'})
      this.setState({upgrade_extended: 70})
      //console.log(this.state.level)
    }
    // eslint-disable-next-line
    const timeline = new mojs.Timeline({}).add(leftTap).play()
  }
  lines(){ /*** LINES OF CODE LABEL ***/
    return (
      <Motion
        defaultStyle={{s: this.state.size, ls: 0}}
        style={{
          s: spring(this.state.end_size, presets.gentle),
          ls: spring(this.state.lineSpacing)
        }}>

        {i => <span style={{ letterSpacing: `${i.ls}px`, ...linesLabel}}>{this.numberReducer(this.state.lines)}</span>}

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
          return numberStr.slice(0,2) + ',' + numberStr.slice(2,5)
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
    const cashValues = [10, 25, 50, 100, 500,
      1000, // 1K
      5000, // 5K
      20000, // 20K
      50000, // 50K
      100000, // 100K
      1000000, // 1M
      20000000, // 20M
      500000000, // 500M
      700000000, // 700M
      1000000000, // 1B
      5000000000, // 5B
      10000000000, // 10B
      50000000000, // 50B
      100000000000, // 100B
      500000000000, // 500B
      1000000000000, // 1T
      20000000000000, // 2T
    ]
    return cashValues[this.state.level-1]
  }
  upgradeClick(){
    if(this.state.cash > this.upgradeLevel(this.state.level)) {
      this.setState({upgradeBox: 'gray'})
      this.setState({upgrade_extended: 50})
      this.setState({keyRadius: this.handleKeyBorderRadius(this.state.level, 50)})
      this.setState({ multiplier: this.state.multiplier * 2 })

      this.setState({cash: this.state.cash - this.upgradeLevel(this.state.level)})
      console.log(this.state.keyRadius)
      setTimeout(t=> this.setState({ level: this.state.level + 1}), 1500)
      // eslint-disable-next-line
      const timeline = new mojs.Timeline({}).add(upgradeSwirl,learnSwirl,upgradeBurst_2,upgradeBurst_3).play()

    }


    this.setState({ upgrade_extended: 60})
    setInterval(a=> {
      this.setState({upgrade_extended: 50})
    }, 100)
  }
  handleKeyBorderRadius(level, radius){
    return radius - level
  }
  achievements(lines){
    if (lines > 5){
      this.setState({achievement: achievements[0]})
      this.setState({achievementHeight: 100})
      setInterval(a=> this.setState({achievementHeight: 0}), 3000)
    }
    if(lines > 15){
      this.setState({achievement: achievements[1]})
    }
    if (lines > 1000){
      this.setState({achievement: achievements[2]})
    }
    if(lines > 5000){
      this.setState({achievement: achievements[3]})
    }
  }
  hideToast(){
    this.setState({toast: false})
  }

  render(){
    return(
      <div>

        <Flexbox flexDirection='row' justifyContent='flex-start' style={{marginTop: '5px'}}>
          <Flexbox style={{...flex}} flexGrow={1} flexDirection='column'>
            <img alt={Medal} style={{...imgHeader}} src={Medal} height='20px' width='20px'/>
            <span style={{...levelLabel}}>&nbsp;&nbsp;{this.state.level}</span>
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

        <Motion defaultStyle={{h: this.state.achievementHeight}} style={{h: spring(this.state.achievementHeight)}}>
          {i =>
             <Flexbox flexDirection='row' style={{marginTop: '15px'}}>
                <Flexbox flexGrow={1} style={{...achievementStyle}}>
                </Flexbox>
            </Flexbox>
          }
        </Motion>
        <div style={{...flexKeys}}>
        <Flexbox flexDirection='row' >

          <Flexbox style={{...flexFooter}} flexGrow={1}>
            <Motion
              defaultStyle={{y:1200, w: this.state.btn_end_width, r: this.state.keyRadius}}
              style={{
                y: spring(500, presets.gentle),
                w: spring(this.state.btn_left_end_width, presets.gentle),
                r: spring(this.state.keyRadius, presets.gentle)}}>
              { i => /* LEFT KEYBOARD */

                <LeftKeyboard
                  img={keyboards[this.state.level - 1]}
                  style={{
                    height: this.state.btn_height,
                    width: i.w,
                    top: i.y,
                    borderRadius: i.r,
                    backgroundColor: keyboardColors[this.state.level -1] || 'black',
                    ...leftKey
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
                    color: this.state.upgradeBox,
                  ...btn_upgrade
                  }}
                  click={this.upgradeClick}
                  />
              }
            </Motion>
          </Flexbox>

          <Flexbox style={{...flexFooter}} flexGrow={1}>
            <Motion
              defaultStyle={{
                y: 800,
                w: this.state.btn_end_width,
                h: this.state.btn_end_height,
                r: this.state.keyRadius}}
              style={{
                y: spring(500, presets.gentle),
                w: spring(this.state.btn_end_width, presets.noWobble),
                h: spring(this.state.btn_end_height, presets.noWobble),
                r: spring(this.state.keyRadius, presets.gentle)}}>
              { i => /* RIGHT KEYBOARD */

                <RightKeyboard
                  img={keyboards[this.state.level -1]}
                  style={{
                    height: i.h,
                    width: i.w,
                    top: i.y,
                    borderRadius: i.r,
                    backgroundColor: keyboardColors[this.state.level -1] || 'black',
                    ...rightKey
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
