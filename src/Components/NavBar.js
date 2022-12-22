import React from 'react'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className='nav-container'>
      <img 
      className="website-logo" 
      src="https://capable-creponne-a2ef8d.netlify.app/static/media/rubixe_logo.87b1dcae0aa9c2077ff8.png" 
      alt='website-logo'
      />
      <ul className='nav-list'>
        <li>HOME</li>
        <li>SERVICES</li>
        <li>PRODUCTS</li>
        <li>AI INTERNSHIPS</li>
        <li>CAREER</li>
        <li>BLOG</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  )
}

export default NavBar