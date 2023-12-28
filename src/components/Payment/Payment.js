import React from 'react'
import { Link } from "react-router-dom";
import Image from "./../images/foodie.jpeg"
import "./Payment.css"

export default function Payment() {
  return (
    <div className='payment'>
      <div>
        <h3 className='message'><b>Happy Ordering</b></h3>
        <h3 className='message2'><b>Just Relax and Enjoy</b></h3>
      </div>
      <div className='image-container'>
        <img src={Image} className='image' />
      </div>
      <div className='button-container'> {/* New container for the button */}
        <Link className="btn btn-dark mt-3" to='/home'>Return to Home</Link>
      </div>
    </div>
  )
}
