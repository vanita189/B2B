import React from 'react'
import './Blog.css'
import Footer from '../Footer/Footer'

const Blog_obj=[
  {
    id:1,
    image:'https://media.licdn.com/dms/image/D5622AQG8Hrj9z30W7Q/feedshare-shrink_800/0/1695565382625?e=2147483647&v=beta&t=nWV8jfPxTfixOQX5PEEskg4kWVWe1DmzHpAaoTqVlc0',
    title:"How Tickets Selling.....",
    para:"Tickets selling platform plays a crucial role in the event industry by serving as an intermediary between event organizers and attendees."
  },
  {
    id:2,
    image:'https://play-lh.googleusercontent.com/Lm6SbHz2HtkG-PTfxaIL_5y4YT4rTfkSNa7kboUB7ZQFWsaykrhj_-xlhVci48ARWQ=w526-h296-rw',
    title:"Digital Tickets Selling.....",
    para:"As the curtains rise on the digital era, the realm of events undergoes a profound transformation, bidding farewell to traditional paper tickets & embracing the futuristic advantages of digital tickets"
  },
  {
    id:3,
    image:'https://www.edubridgeindia.com/blog/storage/2023/02/business-data-analysis-1.jpg',
    title:"The Power of Guest..",
    para:"Let’s delve into how businesses can leverage the wealth of guest data to optimize their strategies and stay ahead in the competitive game."
  },

]
const Card5 = ({ id, image, title, para }) => (
  <div className="card5" key={id}>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{para}</p>
  </div>
);

const Blog = () => {
  return (
    <div>
     <div className='Blog5'>
      <div className="card-container5">
        {Blog_obj.map(card => (
        <Card5 key={card.id} {...card} />
        ))}
      
      </div>
      
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Blog
