
import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the City</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
              </div>
              <div>
               <span> IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
              </span></div>
        </div>
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix="+" ></NumberCounter>
            </span>

            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={500} start={100} delay='4' preFix="+" ></NumberCounter></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter end={66} start={6} delay='4' preFix="+" ></NumberCounter></span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-button">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>




      <div className="right-h">
        <button className="btn">Join now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Caloriesburned</span>
          <span>220Kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;