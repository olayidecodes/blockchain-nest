import React, { useContext, useState } from 'react';
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Sociallinks from '../Sociallinks/Sociallinks';
import images from '../../constants/images'
import {Link} from 'react-router-dom'

import './Navbar.scss';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);
  
  const [ toggleMenu, setToggleMenu ] = useState(false);
  const [ toggleLinks, setToggleLinks ] = useState(false)
  const [ toggleSmallLinks, setToggleSmallLinks ] = useState(false)


  return (

    <nav className='app__navbar section__padding'>
      <div className="app__navbar-logo">
        <Link><img src={images.logo} alt="Logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li><a href = "#products">Products</a></li>
        <li><a href = "#partners">Partners</a></li>
        <li className='nav__blog sub-menu-parent' onMouseOver={()=>setToggleLinks(!toggleLinks)}>
          <Link className='blog__items' to='blog'>Blog <MdOutlineKeyboardArrowDown className="blog__icon" /></Link>
          <div className="toggle__links sub-menu">
            <Link className="link" to="/blog/?cat=blockchain">
              <h6>Blockchain</h6>
            </Link>
            <Link className="link" to="/blog/?cat=web">
              <h6>Web</h6>
            </Link>
            <Link className="link" to="/blog/?cat=fintech">
              <h6>Fintech</h6>
            </Link>
            <Link className="link" to="/blog/?cat=ai">
              <h6>AI</h6>
            </Link>
          </div>
        </li>    
        <li><Link to='faq'>FAQ</Link></li>  
        <li><a href = "#footer">Contact Us</a></li>
      </ul>
      {/* {toggleLinks && 
      <div className="toggle__links">
          <Link className="link" to="/blog/?cat=blockchain">
            <h6>Blockchain</h6>
          </Link>
          <Link className="link" to="/blog/?cat=web">
            <h6>Web</h6>
          </Link>
          <Link className="link" to="/blog/?cat=fintech">
            <h6>Fintech</h6>
          </Link>
          <Link className="link" to="/blog/?cat=ai">
            <h6>AI</h6>
          </Link>
        </div>
      } */}
      <div className='navbar__user'>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout} className='link'>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
      </div>
      <div className="app__navbar-smallscreen">
        <RiMenu4Line fontSize={27} className='overlay__open' onClick={() => setToggleMenu(!toggleMenu)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center">
          <div className="top">
            <div className="app__navbar-logo">
              <Link><img src={images.logo} alt="Logo" onClick={()=>setToggleMenu(!toggleMenu)} /></Link>
            </div>
            <div className="close__button">
            <RiCloseFill fontSize={27} className='overlay__close' onClick={() => setToggleMenu(!toggleMenu)} />
          </div>
          </div>
          <div className='navbar-smallscreen__user'>
            <span>{currentUser?.username}</span>
            {currentUser ? (
              <span onClick={logout} className='link'>Logout</span>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
            <span className="write">
              <Link className="link" onClick={()=>setToggleMenu(!toggleMenu)} to="/write">
                Write
              </Link>
            </span>
          </div>
            <ul className="app__navbar-smallscreen-links">
              <li><a href = "#products" onClick={()=>setToggleMenu(!toggleMenu)}>Products</a></li>
              <li><a href = "#partners" onClick={()=>setToggleMenu(!toggleMenu)}>Partners</a></li>
              <li className='nav__blog'>
                  <Link to='blog'><p onClick={()=> setToggleMenu(!toggleMenu)}>Blog</p></Link>
                  <MdOutlineKeyboardArrowRight className="blog__icon" onClick={()=>{
                  setToggleSmallLinks(!toggleSmallLinks)}
                  }/>
              </li>    
              <li><Link to='faq' onClick={()=>setToggleMenu(!toggleMenu)}>FAQ</Link></li>  
              <li><a href = "#footer" onClick={()=>setToggleMenu(!toggleMenu)}>Contact Us</a></li>
            </ul>
            {toggleSmallLinks && 
            <div className="toggle__small_links">
                <Link className="link"
                 to="/blog/?cat=blockchain"
                 onClick={()=>{
                  setToggleMenu(!toggleMenu)
                  setToggleSmallLinks(!toggleSmallLinks)}
                  }>
                  <h6>Blockchain</h6>
                </Link>
                <Link className="link"
                 to="/blog/?cat=web"
                 onClick={()=>{
                  setToggleMenu(!toggleMenu)
                  setToggleSmallLinks(!toggleSmallLinks)}
                  }>
                  <h6>Web</h6>
                </Link>
                <Link className="link"
                 to="/blog/?cat=fintech"
                 onClick={()=>{
                  setToggleMenu(!toggleMenu)
                  setToggleSmallLinks(!toggleSmallLinks)}
                  }>
                  <h6>Fintech</h6>
                </Link>
                <Link className="link"
                 to="/blog/?cat=ai"
                 onClick={()=>{
                  setToggleMenu(!toggleMenu)
                  setToggleSmallLinks(!toggleSmallLinks)}
                  }>
                  <h6>AI</h6>
                </Link>
              </div>
            }
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