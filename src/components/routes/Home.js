import React from 'react'
import Video from '../Pages/Video'
import Footer from '../Pages/Footer'
import Card from '../Pages/Card'
import wedding from '../files/wedding.jpg'
const Home = () => {
  return (
    <>
      <Video />
      <Card
        title='Invitation wedding'
        image={wedding}
        body='ASDFGHGTFRDESWDFGFDS'/>
      <Footer />
    </>
  )
}

export default Home
