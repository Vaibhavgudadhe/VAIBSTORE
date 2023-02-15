import React from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {
  const data = [
  {

    id: 1,
    img: "https://www.thesprucepets.com/thmb/nkXzfSm3U6w6qP5ATdlCAQAiMSQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/greyhound1-3eb6a9a20be144f1a4480a0819d6c742.jpg",
    img2:"https://pbs.twimg.com/media/FnK0kSmWAAAfmNA?format=jpg&name=900x900",
   title: "GREYHOUND",
   isNew:true,
   oldPrice:1999,
   price:1299,
  },
  {

    id: 2,
    img:"https://i.pinimg.com/564x/33/06/b8/3306b8156653fea183b5406151c74ded.jpg"  ,
 
   title: 'Bull Dog',
   isNew:false,
   oldPrice:4999,
   price:2499,
  },
  {

    id: 3,
    img: "https://www.pdsa.org.uk/media/7705/beagle-outdoors-gallery-8-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132158008000000000" ,

 
   title: "BEAGLE",
   isNew:false,
   oldPrice:1900,
   price:1200,
  },
  {

    id: 4,
    img:  "https://www.thesprucepets.com/thmb/f0VB_q_pfuwYc2yTOitFTkZZxxg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bullmastiff-standing-in-garden--california--usa-488587377-5921f3583df78cf5fa9b238f.jpg",
 
   title: "BULLMASTIF",
   isNew:false,
   oldPrice:1999,
   price:1279,
  },
]
  return (
    <div className="featuredproducts"> 
    <div className="top">
      <h1>{type} PETS</h1>
      <p>
   {/* <img src="https://img.freepik.com/premium-vector/gradient-colored-sale-background_52683-68098.jpg?w=996" alt="" width="540" height="170" />  */}
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

export default FeaturedProducts
