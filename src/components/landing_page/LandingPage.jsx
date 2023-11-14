import React from 'react'


import Banner from './Banner'
import Accomodation from './Accomodation'
import Roommate from './Roommate'
import Why from './Why'
import Testimonial from './Testimonial'
import Download from './Download'
import Footer from '../reusable/Footer'


const LandingPage = () => {
  return (
    <div className='bg-white flex flex-col'>
      
      <Banner />
      <Accomodation />
      <Roommate />
      <Why />
      <Testimonial />
      <Download />
      <Footer />
    </div>
  )
}

export default LandingPage