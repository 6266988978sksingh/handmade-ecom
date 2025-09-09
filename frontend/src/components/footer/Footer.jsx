import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1 className="logo">HandMade Haaat</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptas error aspernatur molestias dolorem deserunt cumque! Tempora, fuga saepe itaque!</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
        </div>
        
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privecy Policy</li>
            </ul>
            
         </div>
         <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-125-451-4548</li>
                <li>handmadehaat@gmail.com</li>
            </ul>
            </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 0 HandMadeHaat.com - All Righy Reserved. </p>
    </div>
  )
}

export default Footer
