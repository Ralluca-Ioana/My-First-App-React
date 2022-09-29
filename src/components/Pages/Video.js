import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'
import invitationVideo from '../files/invitation.mp4'
import { motion } from 'framer-motion';

const Video = () => {
  return (
    <div className='hero'>
      
        <video autoPlay loop muted id='video'>
            <source src={invitationVideo} type='video/mp4' />
        </video>
        <motion.div  className='content'
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', delay: 0.5}}>
            <h1>PASSION FOR DESIGN.</h1>
            <p>Born from a passion for design.</p>
            <div>
                <Link to='/contact-us' className='btn btn-light'>Launch</Link>
            </div>
        </motion.div>
    </div>
  )
}

export default Video
