import React from 'react'
import { Banner, Products, Partners, Reviews, About, Timeline } from '../../containers'
import './Home.scss'

const Home = () => {
  return (
    <div className='app__home'>
      <Banner />
      <Products />
      <Partners />
      {/* <Reviews /> */}
      {/* <Timeline /> */}
    </div>
  )
}

export default Home