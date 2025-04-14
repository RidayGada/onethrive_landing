import React from 'react'
import image from '../assets/image.png'

const Nav = () => {
  return (
    <div id='nav'>
      <div id="nav1">
        <img src={image} alt="" />
      </div>
      <div id='nav2'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Nav
