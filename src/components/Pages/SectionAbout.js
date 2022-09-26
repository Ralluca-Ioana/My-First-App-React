import React from 'react'
import './SectionAbout.css'
import { motion } from 'framer-motion';

const SectionAbout = () => {
  return (
    <div className='container-about'>
        <motion.div className="section1"
        animate={{ rotate: 360 }}
        transition={{ delay: 1, duration: 1.5 }}>
            <p>OUR MISSION.</p>
            <h1>We put professionalism and passion in every detail.</h1>
        </motion.div>
        <div className="section2">
            
            <motion.p initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', delay: 2}}>
              Ever since the concept, our Marinette.ro brand wanted to bring authenticity and personalization to every detail related to our products.</motion.p>
            <motion.p initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', delay: 3}}>We say that we have the widest range of options that you, our customers, can choose down to the smallest detail.</motion.p>
        
        </div>
      
    </div>
  )
}

export default SectionAbout
