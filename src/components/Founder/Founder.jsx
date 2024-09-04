import React from 'react'
import './Founder.css'
import manoj from '../../assets/manoj.jpeg'
const Founder = () => {
  return (
    <div className='bodi'>
    <div className="containe">
    <div className="left-f"></div>
    <div className="right-f"></div>
    <div className="middle-f">
        <h3 className='h'>PERSONAL COACH AND TRAINER</h3>
        <h2 className='stroke-tex'>FOUNDER</h2>
        <img className='img'src={manoj} alt="" />
        <h1 className="a">Manoj</h1>
        
        <div className="paradiv">
            <p>I the passionate and dedicated owner of FitStudio, a state-of-the-art fitness facility that caters to individuals of all fitness levels. With over 6 years of experience in the fitness industry, has transformed their love for health and wellness into a thriving community where members can achieve their personal fitness goals.</p>
        </div>
    </div>
</div>
</div>

  )
}

export default Founder