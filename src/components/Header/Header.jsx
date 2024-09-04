import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Hero from '../Hero/Hero'
import {BrowserRouter as Router,Routes, Route, useNavigate} from 'react-router-dom';
import Programs from '../Programms/Programs';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';


const Header = () => {

  return (
    <div className="header">
      
        <img src={Logo} alt="" className='logo' />
        
        <ul className='header-menu' >
        <li ><Link  to='Home' span={true} smooth={true} >Home</Link></li>
        <li ><Link  to='Programs' span={true} smooth={true} >Programs</Link></li>
        <li ><Link  to='Reasons' span={true} smooth={true} >Why us</Link></li>
        <li ><Link  to='Plans' span={true} smooth={true} >Plans</Link></li>
        <li><Link  to='Testimonials' span={true} smooth={true} >Testimonials</Link></li>
    </ul>
      
        
        
    </div>
  )
}

export default Header;