import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const settings = {
	arrows: false,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 1700,
	fade: false,
	swipeToSlide: true,
	vertical: true,
  infinite: false
}
const div = {
  marginTop: 10,
}
const style = {
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: 10,
  width: '100%',
  marginLeft: 10,
}


export default props => (
  <div style={{...div}}>
  <Slider {...settings}>
    <div style={{...style}}>>_</div>
    <div style={{...style}}> &nbsp; it all started</div>
    <div style={{...style}}> &nbsp; with zeros & ones...</div>
    <div style={{...style}}> &nbsp; start coding!</div>
    <div style={{...style}}> &nbsp; goodluck :)</div>
    <div style={{...style}}>>_</div>
  </Slider>
  </div>
)
