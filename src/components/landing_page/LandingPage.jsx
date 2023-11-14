import React from 'react'

import Nav from '../reusable/Nav'
import Banner from './Banner'


const LandingPage = () => {
  return (
    <div className='bg-mainBlue flex flex-col'>
      <Nav />
      <Banner />
    </div>
  )
}

export default LandingPage