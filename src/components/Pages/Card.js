import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card({title,image, body}) {
  return (
    <div className='container'>
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
  </div>
  )
}
export default Card
