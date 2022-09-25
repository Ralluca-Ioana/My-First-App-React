import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    
 
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <NavLink to="/" className="navbar-logo">
                <i className='fab fa-modx'/>
                HandMade 
            </NavLink>
           
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                    <NavLink exact to='/' activeClassName = 'active' className='nav-links' onClick={() => setClick(!click)}>
                        Home 
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to='/services' activeClassName = 'active' className='nav-links' onClick={() => setClick(!click)}>
                        About Us 
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to='/products' activeClassName = 'active' className='nav-links' onClick={() => setClick(!click)}>
                        Products
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to='/contact-us' activeClassName = 'active' className='nav-links' onClick={() => setClick(!click)}>
                        Contact Us 
                    </NavLink>
                </li>
            </ul>
            <div className="menu-icon" onClick={() => setClick(!click)}>
                <i className={click ? 'fas fa-times':'fas fa-bars'} />
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
