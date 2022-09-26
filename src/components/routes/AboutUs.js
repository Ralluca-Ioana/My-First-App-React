import React from 'react'
import Hero from '../Pages/Hero'
import Footer from '../Pages/Footer'
import SectionAbout from '../Pages/SectionAbout'
import { motion } from 'framer-motion';
const Services = () => {
  return (
    <>
      <Hero heading='ABOUT US.' text='About Handmade' />
      <SectionAbout />
      <Footer />
    </>
  )
}

export default Services
