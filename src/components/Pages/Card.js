import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';

function Card({image, title, body}) {
   
  return (
        <motion.div  whileHover={{ scale: 1.1 , textShadow: "0px 0px 10px rgb(255,182,193)",
        boxShadow: "0px 0px 10px rgb(0,0,0)" }} className='container'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="content-card">
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="body">
                    <p>{body}</p>
                </div>
            </div>
            
            <div className="button-card">
                <Link className='card-link' to='/products'>View more</Link>
            </div>
        </motion.div>
    )
}
export default Card
