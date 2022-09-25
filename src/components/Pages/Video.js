import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'

import invitationVideo from '../files/invitation.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={invitationVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>PASSION FOR DESIGN.</h1>
            <p>Born from a passion for design.</p>
            <div>
                <Link to='/contact' className='btn btn-light'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Video
