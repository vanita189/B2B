import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className='ticketsque'>
          <img src="https://business.ticketsque.com/assets/logo-7c769ee2.svg"/>
          <p>C/O TruX Space, Mahaganapathi Nagar, Rajajinagar, Bengaluru, Karnataka 560010</p>
          <p>contact@ticketsque.com</p>
        </div>
       
    
        <div className='company'>
          <h2 style={{color:"#2c31d9fb"}}>Company</h2>
          <div className='link'>
          <div className='link1'>
            <p>About us</p>
            <p>Pricing</p>
            <p>Privacy policy</p>
          </div>
          <div className='link2'> 
            <p>Contact us</p>
            <p>Terms and Conditions</p>
            <p>Refund and cancellation</p>
          </div>
          </div>
        </div>
       
       <div className='Stay'>
        <h2 style={{color:"#2c31d9fb"}}>Stay up to date</h2>
        <div>
          <input type="text" placeholder='Your email address'></input>
        </div>
        <div>
        {/* <i className="bi bi-instagram"></i> */}

        </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
