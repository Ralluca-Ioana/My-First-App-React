import React from 'react'
import Video from '../Pages/Video'
import Footer from '../Pages/Footer'
import Card from '../Pages/Card'
import wedding from '../files/wedding.jpg'
import baptism from '../files/baptism.jpg'
import accessories from '../files/accesories.jpg'


const Home = () => {
  return (
    <>
      <Video />
      <div className="home-cards" style={{width:'80%', textAlign: 'center', marginLeft:'10%', marginTop: '-5rem'}}>
        <h2 style={{fontSize: '2rem', fontFamily: 'Fredericka the Great', color: 'rgb(172, 106, 117)', marginBottom: '4rem'}}>
          MADE WITH LOVE
        </h2>
        <Card
          title='Wedding Invitations'
          image={wedding}
          body="Our invitations are the result of the inspiration brought to us by the most important events..."/>
          <Card
          title='Baptism Invitations'
          image={baptism}
          body="Baptism represents one of the most important moments in the life of the little one, but also of the parent..."/>
          <Card
          title='Accesories'
          image={accessories}
          body="The details make the difference, and we offer you a wide range of elegant, high-quality accessories..."/>
      </div>
      <Footer />
    </>
  )
}

export default Home
