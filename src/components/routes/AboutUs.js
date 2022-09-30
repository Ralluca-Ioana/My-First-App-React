import React from 'react'
import Hero from '../Pages/Hero'
import Footer from '../Pages/Footer'
import SectionAbout from '../Pages/SectionAbout'

const AboutUs = () => {
  return (
    <div>
      <Hero heading='ABOUT US.' text='About Handmade' />
      <SectionAbout />
      <Footer />
    </div>
  )
}

export default AboutUs
