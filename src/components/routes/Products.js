import React from 'react'
import Hero from '../Pages/Hero'
import Footer from '../Pages/Footer'
import SectionProduct from '../Pages/SectionProduct'
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <>
      <Hero heading='PRODUCTS.' text='Product create our company' />
      <SectionProduct />
      <Footer />
    </>
  )
}

export default Products
