import React from 'react'
import Hero from '../Pages/Hero'
import Footer from '../Pages/Footer'
import Card from '../Pages/Card'

const Products = () => {
  return (
    <div>
      <Hero heading='PRODUCTS.' text='Product create our ' />
      <Card
        title='Invitation wedding'
        image="./files/wedding.jpg"
        body='ASDFGHGTFRDESWDFGFDS'/>
      <Footer />
    </div>
  )
}

export default Products
