import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Start2 from '../Start2/Start2';
import Footer from '../Footer/Footer';



const cards=[
  {
    id:1,
    image:"https://business.ticketsque.com/assets/Guest%20List%20management-c86241d6.svg",
    title:"Seamless Integration",
    para:"The process that allows for effortless management of digital coupons, event ticketing, and guest lists, all within one platform."
  },
  {
    id:2,
    image:"https://business.ticketsque.com/assets/Streamlined%20Coupon%20Distribution-bb1067b4.svg",
    title:"Unmatched Security",
    para:"Our unique QR code system ensures the security of your digital coupons and event tickets, minimizing the risk of fraudulent activities."
  },
  {
    id:3,
    image:"https://business.ticketsque.com/assets/Real%20time%20Coupon%20Tracking-34518ec9.svg",
    title:"Data-Driven Insights",
    para:"TicketsQue offers robust data analytics tools to help you gain insights into customer behavior, allowing you to tailor your promotions & marketing efforts effectively."
  },
  {
    id:4,
    image:"https://business.ticketsque.com/assets/Statics%20_%20Analysis-ac627181.svg",
    title:"Improved Customer Engagement",
    para:"Engage with your customers in innovative ways, including personalized marketing and promotions. Keep your customers coming back for more ."
  },
  {
    id:5,
    image:"https://business.ticketsque.com/assets/Marketing%20Tool-fb3cf1dd.svg",
    title:"Improved Customer Engagement",
    para:"Engage with your customers in innovative ways, including personalized marketing and promotions. Keep your customers coming back for more ."
  },
  {
    id:6,
    image:"https://business.ticketsque.com/assets/EffortLess%20guest%20self%20checkin-501ce892.svg",
    title:"Convenience and Efficiency",
    para:"Manage your entire business in one place with our easy-to-use dashboard. From creating events to monitoring guest lists, making your job easier and more efficient."
  }
]
const Card = ({ id, image, title, para }) => (
  <div className="card" key={id}>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{para}</p>
  </div>
);

const Ticket = () => {
  return (
    <>
    <h1>Digital Ticket Distribution</h1>
    <p>TicketsQue Digital Ticket Distribution revolutionizes how events manage and 
      distribute tickets. With a seamless and secure digital platform, event hosts can
      effortlessly create, distribute, and manage event tickets. Attendees can receive
      their tickets via convenient digital channels like WhatsApp, SMS, or even print 
      a physical copy. Each ticket includes a unique QR code, ensuring that only
      genuine ticket holders gain access to the event. This not only simplifies the 
      check-in process but also significantly reduces the risk of fraudulent ticket
      use. From creating events to analyzing ticket sales and guest data, TicketsQue
      offers a comprehensive 
      solution for event management</p>
    <Link to="/Tickets">
    <button  className='btn3 Button1'>Learn More</button></Link>
    </>
  );
}
const Coupon=()=>{
  return(<>
    <h1>Digital Coupon Distribution</h1>
    <p>Digital Coupon Distribution is a powerful solution
       designed to revolutionize how businesses engage with their customers.
        Our platform streamlines the coupon creation process, making it easy to generate
         and distribute digital coupons to your target audience. 
         These coupons are equipped with unique QR codes, simplifying the redemption 
         process for both customers and businesses. With real-time insights and 
         analytics, you can track the effectiveness of your coupon campaigns and make 
         data-driven decisions to enhance customer engagement. Say goodbye to paper 
         coupons and embrace the efficiency, eco-friendliness, and convenience of 
         digital 
      coupon distribution with Ticketsque.
      </p>
      <Link to="/Coupon">
      <button className='btn3 Button1'>Learn More</button></Link>
      </>
  );
}
const Guestlist=()=>{
  return(<>
    <h1>Guestlist Management</h1>
    <p>TicketsQue Guestlist Management is the ultimate solution for businesses.
      It streamlines the process of collecting and managing guest information, 
      allowing you to deliver exceptional customer experiences. But what sets it apart
      is the powerful integrated marketing tool. With this tool, you can create 
      targeted campaigns, send promotional messages, and offer personalized deals to
      your guests. By harnessing the marketing tool, you can boost customer 
      engagement and loyalty, ultimately growing your business. TicketsQue Guestlist 
      Management is your key to building lasting relationships with
      customers and unlocking business potential.</p>
    <Link to="/Guest">
    <button className='btn3 Button1'>Learn More</button></Link>
    </>
  )
}

const Home = () => {
  const [selectedFunction, setSelectedFunction] = useState(null);

  const handleButton = (functionName) => {
    setSelectedFunction(functionName);
  };

  return (
    <div>
      <div className='header'>
        <h1>
          Unlocking the Power of Coupons, Event Tickets,
          and Guestlist Management with
          <span style={{ color: "#2c31d9fb" }}> TicketsQue</span>
        </h1>
        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          We provide a streamlined software, empowering businesses for success and growth.
        </p>
        <Link to="/Book">
          <button className='btn1 Button2 '>Book a Demo</button>
        </Link>
        <Link to="/Start">
          <button className='Button1'>Get Started</button>
        </Link>
      </div>

      <div className='image'>
        <img src="https://business.ticketsque.com/assets/graphic-a973571d.webp" alt="image" />
      </div>

      <div className='Buisness'>
        <h1>Trusted By Leading Businesses</h1>
        <div className='Buisness_partners'>
          <img src='https://business.ticketsque.com/assets/toca-c8b681f9.svg' alt="pat_1" />
          <img src='https://business.ticketsque.com/assets/drava-a0a4f0fd.svg' alt="pat_2" />
          <img src="https://business.ticketsque.com/assets/badshaah-0cc6d038.svg" alt="pat_3" />
          <img src='https://business.ticketsque.com/assets/catch_up-e3ed1727.svg' alt="pat_4" />
          <img src='https://business.ticketsque.com/assets/just_blr-3a788715.svg' alt="pat_5" />
          <img src="https://business.ticketsque.com/assets/boho-ced8eadd.svg" alt="pat_6" />
          
          <img className="image7" src="https://business.ticketsque.com/assets/tipsy_bull-e012b187.svg" alt="pat_7" />
          <img className="image8" src="https://business.ticketsque.com/assets/jook-e68d11a6.svg" alt="pat_8" />
          <img className="image9" src="https://business.ticketsque.com/assets/district-9922549f.svg" alt="pat_9" />
          <img className="image10" src="https://business.ticketsque.com/assets/salpata-c6ff9643.svg" alt="pat_10" />
        </div>
      </div>

      <div className='Built_for'>
        <span >Built for You</span>
        <h1>Our Comprehensive Solutions</h1>
        </div>


      <div className='digital'>
        <button onClick={()=>handleButton('Digital Coupon Distribution')}>Digital Coupon Distribution</button>
        <button onClick={() => handleButton('Digital Ticket Distribution')}>Digital Ticket Distribution</button>
        <button onClick={()=>handleButton('Guestlist Management')}>Guestlist Management</button>
      </div>
      
      <div className='functions'>
        {
          !selectedFunction && (<Coupon/>)
        }
      { 
        selectedFunction === 'Digital Coupon Distribution' && (<Coupon/>)
      } 
      {
        selectedFunction === 'Digital Ticket Distribution' && (<Ticket />)
      }
      {
        selectedFunction === 'Guestlist Management' && (<Guestlist/>)
      }
      </div>
      

      <div className='journey'>
        <h3 style={{color:"#2c31d9fb"}}>Start Your Journey</h3>
        <h1>Customized Solutions for Your Unique Business Needs</h1>
        <p>Ticketsque is made to fit your business, you are in control, ensuring you
           have complete control over how our platform enhances your operations.
        </p>
        <Link to="/Book">
        <button className='Button2'>Book a Demo</button>
        </Link>
      </div>

      <div className='activities'>
        <h3 style={{color:"#2c31d9fb"}}>Why TicketsQue</h3>
        <h1>Singular solution to all your activities</h1>
      </div>

      
     
      <div className="card-container6">
        {cards.map(card => (
        <Card key={card.id} {...card} />
        ))}
      </div>

      <div className='interactions'>
        <div>
          <h1>5000+</h1>
          <h5>Coupons sold</h5>
        </div>
        <div>
          <h1>2.5 Crore+</h1>
          <h5>Transactions Made</h5>
        </div>
        <div>
          <h1>30,000+</h1>
          <h5>Customer interactions</h5>
        </div>
      </div>
      

      <div className='insider'>
            <img src="https://business.ticketsque.com/assets/ticketsque_insider-a71aea18.webp"/>
      </div>
      <div className='heading'>
            <h5>TicketsQue Insider</h5>

            <h1>Mobile Application for all business actions</h1>

            <p>Our mobile application, TicketsQue Insider, empowers businesses and customers alike with an easy-to-use platform for every action. Whether you're a business owner distributing coupons, managing your guest list, or selling event tickets, or a customer looking to redeem coupons or check in at your favorite venue, Ticketsque Insider offers a seamless and efficient experience. Our mobile app ensures that every interaction, from scanning QR codes to viewing event details, is just a tap away. Simplify your experience with Ticketsque Insider, where every action is at your fingertips.</p>

            <img src="https://business.ticketsque.com/assets/google_play_btn-da844d64.svg"/>
            <img src="https://business.ticketsque.com/assets/apple_icon-d7b90fe1.svg"/>
      </div>

    <div>
     <div className='Analysis'>
          <h5>Insights & Analysis</h5>
          <h1>Advanced Reports & Analytics</h1>

          <p>Unlock the potential of your business with Ticketsque's advanced insights, reports, and analytics. Get detailed data on coupon usage, guest demographics, and sales trends to make informed decisions. Our comprehensive analytics empowers you to optimize operations, enhance marketing strategies, and stay ahead of the competition. Gain a deeper understanding of your business and drive growth with Ticketsque's advanced insights.</p>

     </div>
     <div className='analysis3'>
          <img src="https://business.ticketsque.com/assets/Insights%20_Analytics-7701de6d.svg"/>
      </div>
    </div>


    <div>
      <div  className='Buisness2'>
        <img src="https://business.ticketsque.com/assets/boost-1c881d0e.svg"/>
      </div>

      <div className='business3'>
          <h4>Boost Your Business</h4>

          <h1>Revolutionize Your Marketing</h1>

          <p>Elevate your marketing game with Ticketsque's marketing tool, allowing you to send and blast promotional messages, discount vouchers, and special offers to your audience. Our platform helps you engage with your customers effectively, build brand loyalty, and boost your business. With the power to reach your customers directly through SMS, WhatsApp, or email, you can create personalized campaigns that drive sales and keep your audience coming back for more. Experience the ease and effectiveness of sending promotional messages and vouchers with Ticketsque.

          </p>
      </div>
    </div>


    <div>
     

      <div className='possibilities3'>
          <h4>Unlock New Possibilities</h4>
          <h1>Integrate TicketsQue API’s with your Billing software</h1>
          <p>API integration with your billing software redemption data is instantly updated, ensuring that every redemption is swiftly and accurately recorded. This seamless integration guarantees the smooth and efficient operation of your business while significantly reducing the margin for error.
          </p>

      </div>
      <div  className='Possibilities'>
        <img src="https://business.ticketsque.com/assets/tq_api-d5eb6148.svg"/>
      </div>
    </div>


    <div className='testimonials'>
      <h3>Testimonials</h3>
      <h1>Our Clients Say About Our Product</h1>
    </div>

  <div className='feedback'>

    <div className="card2">
    <img src="https://business.ticketsque.com/assets/double_quotes-ed66a07c.svg" alt="quotation marks"/>
    <p>
      API integration with your billing software redemption data is instantly updated, ensuring that every redemption is swiftly and accurately recorded. This seamless integration guarantees the smooth and efficient operation of your business while significantly reducing the margin for error.
    </p>
    <div className='feed'>
    <img class="profile" src="https://business.ticketsque.com/assets/toca_logo-df4ec0fd.png" alt="Profile Image"/>
    <div>
    <h3>Siddanagouda Patil</h3>
    <h4>Owner of TOCA, Koramangala, Bengaluru</h4></div>
    </div>
  </div>

  <div className="card2">
    <img src="https://business.ticketsque.com/assets/double_quotes-ed66a07c.svg" alt="quotation marks"/>
    <p>
    API integration with your billing software redemption data is instantly updated, ensuring that every redemption is swiftly and accurately recorded. This seamless integration guarantees the smooth and efficient operation of your business while significantly reducing the margin for error.

    </p>
    <div className='feed'>
    <img class="profile" src="https://business.ticketsque.com/assets/catchup_logo-0d681643.png" alt="Profile Image"/>
    <div>
    <h3>Bhaskar Raghu</h3>
    <h4>Owner of Catchup, HSR Layout, Bengaluru</h4></div>
    </div>
  </div>
  </div>
       

  <div className='Your'>
    <h4 style={{color:"#2c31d9fb"}}>Register With Us </h4>
    <h1>Start your TicketsQue Journey </h1>
  </div>

  <div >
    <Start2/>
  </div>
 
  <div className='Growth'>
    <h2 style={{color:"#2c31d9fb"}}>Start Your Journey</h2>
    <h1 >TicketsQue is the fuel to your Business Growth and Supercharge Engagement.</h1>
    <div className='btn10'>
      <button className='Button2'>Start Free Trail</button>
      <button className='Button1'>Get Started Now </button>
    </div>

  </div>
   
<div>
  <Footer/>
</div>

  </div>)}
export default Home;