import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <p><FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem', fontSize: '2rem'}} />Str. Dreptatii, Iasi</p>
                </div>
                <div className='phone'>
                    <p><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> +40 743 904 392</p>
                </div>
                <div className='email'>
                    <p><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> info@contact.ro</p>
                </div>
                <div className='email'>
                    <p><FaClock size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> L-V: 08:00-19:00</p>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>"We want to provide a beautiful experience for the customers of our products when they look at the product, 
                    that's why our brand offers you the most interesting and fine types of cardboard for wedding and baptism invitations."</p>
                <div className='social'>
                    <FaFacebook size={20} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaTwitter size={20} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaLinkedin size={20} style={{ color: '#ffffff', marginRight: '1rem' }} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
