import React from 'react'
import image7 from "./images/image 7.png"
import smallcart from "./images/smallcart.png"
import "./Down.css"

export default function Down() {
    const dishes=[
        {
            dishitem:"Prawn Salad with White Rice",
            src:require("./images/image 7.png"),
            price:"15"
        },
        {
            dishitem:"Red velvet with white Chocolate",
            src:require("./images/image 5.png"),
            price:"25"
        },
        {
            dishitem:"Lime Asparagus",
            src:require("./images/image 4.png"),
            price:"10"
        },
        {
            dishitem:"Green Beanes",
            src:require("./images/image 6.png"),
            price:"30"
        }
    ]
    return (
        <div className='alldishes'>
        {
            dishes.map((item,key)=>(
                <div className='listmenu'key={item.id}>
            <div className='topcomp'>
                
                    <img src={item.src} className='Prawn' />
                
                <div className='dollar'>
                    <h1>${item.price}</h1>
                    <img src={smallcart} />
                </div>

            </div>
                <h1>{item.dishitem}</h1>
            


        </div>


            ))
        }
       </div>
        
    )
}
