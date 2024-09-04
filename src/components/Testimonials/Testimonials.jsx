import React, { useEffect, useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Testimonials = () => {
  const[selected,setSelected]=useState(0);
  const tLength=testimonialsData.length;

 
  return (
  <div className="Testimonials" id='testimonials'>
    <div className="left-t">
        <span>Testimonials</span>
        <span  className='stroke-text'>What they</span>
        <span>say about us</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{color:"black"}}>
            {testimonialsData[selected].name}
          </span>{" "}
          -{testimonialsData[selected].status}
        </span>
    </div>
    <div className="right-t">
    <div className='img1'><img className=" pic" src={testimonialsData[selected].image} alt=""  /></div>
    <div className="arrows">
      <img src={leftArrow} onClick={()=>setSelected(Math.abs((selected + tLength-1) % tLength))} />
      <img src={rightArrow} onClick={()=>setSelected((selected+1)%tLength)}/>
    {console.log(selected)}
    </div>
    </div>
  </div>
  )
}

export default Testimonials