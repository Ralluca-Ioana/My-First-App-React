import React, { Component } from 'react'
import './Hero.css'
import { motion } from 'framer-motion';

 class Hero extends Component {
  render() {
    return (
      <div className='heroImg'>
        <motion.div  className='heading'
          initial={{x:'100vw'}}
          animate={{x:0}}
          transition={{type:'spring', delay: 0.5}}>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </motion.div>
      </div>
    )
  }
}
export default Hero;
