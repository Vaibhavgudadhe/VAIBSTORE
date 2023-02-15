import React from 'react'
import "./FeaturedProducts2.jsx";
import Card from '../Card/Card';

const FeaturedProducts2 = ({type}) => {
  const data = [
  {

    id: 1,
    img: "https://i.pinimg.com/564x/64/1d/fb/641dfb348154c04c1615d9642162d94b.jpg",
    img2:"https://i.pinimg.com/564x/67/88/54/678854b3c6167840eb902cc44712ab6c.jpg",
   title: "HAMSTER",
   isNew:false,
   oldPrice:1299,
   price:999,
  },
  {

    id: 2,
    img:  "https://i.pinimg.com/564x/7c/65/22/7c65220843b82fa9b3df4b1c024e1700.jpg",
 
   title: 'FRENCH LOP',
   isNew:false,
   oldPrice:1799,
   price:1399,
  },
  {

    id: 3,
    img:  "https://i.pinimg.com/564x/8f/f6/44/8ff644722ed6057f6407b9ebe6d945fe.jpg",
 
   title: "GOAT",
   isNew:true,
   oldPrice:3999,
   price:1112,
  },
  {

    id: 4,
    img:  "https://i.pinimg.com/564x/d9/0a/ed/d90aed6bf9edfff0f2c09d7ca6b353ef.jpg",
 
   title: "HEN",
   isNew:false,
   oldPrice:999,
   price:499,
  },
]
  return (
    <div className="featuredproducts"> 
    <div className="top">
      {/* <h1>{type} products</h1> */}
      <p>
 

      </p>
      </div>  
      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts2