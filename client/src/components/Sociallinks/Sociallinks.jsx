import React from 'react'

import {FaDiscord, FaTelegram, FaLinkedinIn, FaTwitter, FaGithub, FaRedditAlien, FaYoutube} from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'

import './Sociallinks.scss'

const Sociallinks = () => {
  return (
      <ul className='social__links'>
        <li><a href="#"><FaDiscord className='icon'/></a></li>
        <li><a href="#"><FaTelegram className='icon'/></a></li>
        <li><a href="#"><FaLinkedinIn className='icon'/></a></li>
        <li><a href="#"><FaTwitter className='icon'/></a></li>
        <li><a href="#"><FaGithub className='icon'/></a></li>
        <li><a href="#"><BsMedium className='icon'/></a></li>
        <li><a href="#"><FaRedditAlien className='icon'/></a></li>
        <li><a href="#"><FaYoutube className='icon'/></a></li>
      </ul>
  )
}

export default Sociallinks
