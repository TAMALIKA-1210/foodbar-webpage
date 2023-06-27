import React from 'react'
import "./Nav.css"
import image1 from "./images/image 1.png"
import Vector from "./images/Vector.png"

export default function Nav() {
  return (
    <>
    <div className="topnav">
        <a className='shop' href='#'>Shop</a>
        <a className='Features' href='#'>Features</a>
        <a className='Recipes' href='#'>Recipes</a>
        <a className='Helpline' href='#'>Helpline</a>
        <div className='Cart'>
        <img src={Vector}/>
        <img src={image1}/>
        </div>
        </div>
        <div className='menu'>
          <h1>healthy salad</h1>
          <p>Salad is nutritionally complete food that contains minerals proteins, essential fatty acids, carbs, fibre and phytonutrients.</p>
        </div>
        <div className='order'>
          <p>$28</p>
          <button type="submit">Order Now</button>
        </div>
    </>
  )
}
