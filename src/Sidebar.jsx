import React from 'react'
import menu from "./images/menu.png"
import google from "./images/google.png"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <img src={menu}/>
        <div className='social'>
        <img src={google}/>
        <img src={facebook}/>
        <img src={instagram}/>
        </div>
    </div>
  )
}

