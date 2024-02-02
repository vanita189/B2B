import React from 'react'
import './Book.css'
import Footer from '../Footer/Footer'

const Book = () => {
  return (
    <div>
      <div className='Book'>
          <div className='Book_image'>
          <img src="https://business.ticketsque.com/assets/FreeTrialMobileImg-0cff7e3b.png"/>
          <h1>Why Choose Us?</h1>
          <p>We're dedicated to your success. From coupon distribution to event ticketing, our solutions are tailored to boost your business. Choose us for growth, efficiency, and customer satisfaction.</p>
          </div>
          <div className='Book_details'>
          <h1>Book A Demo</h1>
          <input type="name" placeholder='Buisness Name*'/>
          <input type="text" placeholder='Buisness Type*'/>
          <input type="email" placeholder=' Email*'/>
          <input type="name" placeholder='Contact Person Name*'/>
          <input type="number" placeholder='+91*'/>
          <button>Continue</button>

          </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Book
