import React, { useState } from 'react';
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri';
import Sociallinks from '../Sociallinks/Sociallinks';
import images from '../../constants/images'
import {Link} from 'react-router-dom'

import './Navbar.scss';

const Navbar = () => {
  
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (

    <nav className='app__navbar section__padding'>
      <div className="app__navbar-logo">
        <Link><img src={images.logo} alt="" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li><a href = "#team">Products</a></li>
        <li><a href = "#downloads">Partners</a></li>
        <li><Link to='blog'>Blog</Link></li>    
        <li><Link to='faq'>FAQ</Link></li>  
        <li><a href = "#contact">Contact Us</a></li>
      </ul>
      <div className="app__navbar-socials">
        <Sociallinks />
      </div>

      <div className="app__navbar-smallscreen">
        <RiMenu4Line fontSize={27} className='overlay__open' onClick={() => setToggleMenu(!toggleMenu)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans"><a href = "#team">Team</a></li>
                <li className="p__opensans"><a href = "#">FAQ</a></li>
                <li className="p__opensans"><a href = "#downloads">Downloads</a></li>
                <li className="p__opensans"><a href = "#">Blog</a></li>
                <li className="p__opensans"><a href = "#contact">Contact Us</a></li>
            </ul>
            <div  className='overlay_socials'>
                <Sociallinks className='overlay_socials'/>
            </div>
          </div>
        )}
        
      </div>
      
    </nav>
  )
};

export default Navbar;