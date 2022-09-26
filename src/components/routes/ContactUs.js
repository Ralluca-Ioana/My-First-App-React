import React from 'react'
import Hero from '../Pages/Hero'
import Form from '../Pages/Form'
import Footer from '../Pages/Footer'
import { motion } from 'framer-motion';
const ContactUs = () => {
  return (
    <>
      <Hero heading='CONTACT.' text='Contact Handmade' />
      <Form />
      <Footer/>
    </>
  )
}

export default ContactUs
