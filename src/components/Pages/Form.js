import React from 'react'
import './Form.css'
import { motion } from 'framer-motion';

const Form = () => {
  return (
    <div className='form'>
        <form>
            <motion.label
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', delay: 0.6}}>Your Name</motion.label>
            <input type='text' required></input>
            <motion.label
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', delay: 0.7}}>Email</motion.label>
            <input type='email' required></input>
            <motion.label
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', delay: 0.8}}>Subject</motion.label>
            <input type='text' required></input>
            <motion.label
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', delay: 0.9}}>Details</motion.label>
            <textarea rows='6' placeholder='Type a message here' required/>
            <motion.button whileHover={{ scale: 1.1 , textShadow: "0px 0px 10px rgb(255,182,193)",
            boxShadow: "0px 0px 10px rgb(0,0,0)" }} className='btn' onClick={()=>alert('Form was sent!')}>Submit</motion.button>
        </form>
    </div>
  )
}

export default Form
