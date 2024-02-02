import React from 'react'
import './Aboutus.css'
import Footer from '../Footer/Footer';
const Aboutus = () => {
  const arrows4=[
    {
      id:1,
      image:"https://business.ticketsque.com/assets/Simplify%20coupon%20management%20process-7fcd2647.svg",
      text:"Simplify coupon management process",
      para:"We aim to provide pub owners with an easy-to-use digital coupon system that streamlines the entire process, from event creation to distribution, redemption and tracking"
    },
    {
      id:2,
      image:"https://business.ticketsque.com/assets/Enhance%20customer%20experience-e8444426.svg",
      text:"Enhance customer experience",
      para:"We strive to improve customer experience by enabling pub owners to distribute coupons digitally and giving customers the convenience to redeem them with ease."
    },
    {
      id:3,
      image:"https://business.ticketsque.com/assets/Increase%20revenue%20and%20profitability-a90e775d.svg",
      text:"Increase revenue and profitability",
      para:"Our objective is to help pub owners increase revenue and profitability by providing them with an effective marketing tool that reaches a larger audience and encourages repeat business."
    },
    {
      id:4,
      image:"https://business.ticketsque.com/assets/Statics%20_%20Analysis-ac627181.svg",
      text:"Provide data-driven insights",
      para:"We aim to provide data-driven insights to pub owners to help them make informed business decisions and improve the efficiency of their coupon management process."
    },
  ]
  const Card4 = ({ id, image, text, para }) => (
    <div className="card" key={id}>
      <img src={image} alt={text} />
      <h2>{text}</h2>
      <p>{para}</p>
    </div>
  );
  return (
    <div>
      <div className='container4'>
      <div className='aboutus'>
      <h3>Who We Are</h3>
      <h1>Cutting-edge digital coupon distribution software for pubs</h1><br/>
      <p>Ticketsque is a forward-thinking technology company on a mission to transform the way businesses engage with their guests. Our innovative platform redefines guest interactions, encompassing everything from streamlined guest verification and entry fees to hassle-free redeemable cover charges.
        <br/><br/>
        At Ticketsque, we believe in simplicity and efficiency. Our intuitive interface and powerful features enable businesses to effortlessly manage guest lists, distribute digital coupons, and seamlessly verify and redeem tickets.
        <br/><br/>
        Built on cutting-edge technology, our platform empowers businesses in various industries, from pubs and resorts to event organizers. We are driven by a passion for innovation and customer satisfaction, striving to be the go-to partner for businesses worldwide.</p>
      </div>

      <div  className='about_image'>
        <img src="https://business.ticketsque.com/assets/about_us_landing-e1cbd091.svg"/>
      </div>
    </div>


    <div className='arrow'>
      <div className="arrow_image">
        <img src="https://business.ticketsque.com/assets/Objectives-592ab7e7.svg"/>
      </div>
      <div className='arrow_text'>
        <div className='obj'>
        <h3>Objectives</h3>
        <h1>Driving Success and Innovation with Ticketsque</h1>
        </div>
      
 
        <div className="card-container1">
        {arrows4.map(card => (
        <Card4 key={card.id} {...card} />
        ))}
     
        </div>
        
      </div>

    </div>
    <div className='about_footer'>
      <Footer/>
    </div>
    </div>
  )
}

export default Aboutus
