import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <div>
      <div className='Contact'>
          <div className='details'>
                <h1>Get in<span  style={{color:"#2c31d9fb"}}> Touch</span></h1>
                <p>We're here to help! Reach out to us with any questions, inquiries, or feedback, and our dedicated support team will assist you promptly.</p>
                <input type="name" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="number" placeholder='PhoneNumber'/>
                <input type="dropdown" placeholder='How did you find us?'/>
                <button>Send</button>
          </div>
          <div className='contact_img'>
              <img src="https://i.stack.imgur.com/HILmr.png"/>
          </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact
