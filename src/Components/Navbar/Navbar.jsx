import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  

  
  return (
    <div>
    <div className='container'>
      <img src="https://business.ticketsque.com/assets/logo-7c769ee2.svg" alr="logo"/>
        <ul className='nav_links'>
            <li><Link to="/Home">Home</Link></li>
            <li>Solutions
                      <div class="sub_menu1">
                      <ul> 
                        <li>Digital Coupons</li>
                        <li>Digital Tickets</li>
                        <li>Guestlist Management</li>
                    </ul> 
                    </div>
            
            
            </li>
            <li><Link to="/Aboutus">Aboutus</Link></li>
            <li><Link to="/Contact">Contactus</Link></li>
            <li><Link to="/Blog">Blog</Link></li>

          
            <li>
              <Link to="/Start">
                <button className='Button2'>
                  Start free trail</button>
              </Link>
            </li>      
              
            
            <li>
              <Link to="/Book">
                <button className='Button1'>Book Demo</button>
              </Link>
            </li>
        </ul>

      <div className='container2' >
      <ul>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/DititalCoupans">Digital Coupans</Link></li>
      <li><Link to="/DititalTickets">Digital Tickets</Link></li>
      <li><Link to="/Guestlist">Guestlist Management</Link></li>

      </ul>
      <Link to="/Explore">
        <button className= "btn Button1">Explore Events</button>
        
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/menu-9736711-7904909.png?f=webp&w=256"/>
      </Link>

      </div>


      
    </div>
    </div>
  )
}

export default Navbar
