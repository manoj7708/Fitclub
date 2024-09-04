import React from 'react'
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links" >
            <a href='https://www.instagram.com/manoj__cruzz/?hl=en'>   <img src={Instagram} alt="" /> </a>
            <a href='https://www.linkedin.com/in/manojkumar7708/'>   <img src={Github} alt="" /> </a>
         <a href='https://www.linkedin.com/in/manojkumar7708/'>   <img src={Linkedin} alt="" /> </a>
            </div>
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer