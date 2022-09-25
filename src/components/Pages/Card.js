import React from 'react'
import './Card.css'

function Card({title,image, body}) {
  return (
    <div className='container'>
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="title">
            <h3>{title}</h3>
        </div>
        <div className="body">
            <p>{body}</p>
        </div>
  </div>
  )
}
export default Card
