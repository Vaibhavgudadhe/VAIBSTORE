import React from 'react'
import "./FeaturedProducts2.jsx";
import Card from '../Card/Card';

const FeaturedProducts1 = ({type}) => {
  const data = [
  {

    id: 1,
    img: "https://i.pinimg.com/564x/11/b0/7b/11b07bc1bc089d6d0fbe8822709d3f82.jpg",
    img2:"https://i.pinimg.com/564x/47/87/08/478708e348065ac9ccabb7fc1b04d7bc.jpg",
   title: " Scottish Fold Cats",
   isNew:true,
   oldPrice:1149,
   price:799,
  },
  {

    id: 2,
    img:  "https://i.pinimg.com/564x/94/66/c8/9466c86406edcd9384b90ccdafa6d78c.jpg",
 
   title: 'Abyssinian Cats',
   isNew:false,
   oldPrice:1399,
   price:1270,
  },
  {

    id: 3,
    img:  "https://i.pinimg.com/564x/b2/af/e0/b2afe057c0fe1a0ce0e4a9323d6abe9f.jpg",
 
   title: "Persian Cats",
   isNew:false,
   oldPrice:1999,
   price:1200,
  },
  {

    id: 4,
    img:  "https://i.pinimg.com/564x/3b/c9/4c/3bc94c1a607fb9afb52105f08c6882ce.jpg",
 
   title: "Devon Rex Cats",
   isNew:true,
   oldPrice:1899,
   price:699,
  },
]
  return (
    <div className="featuredproducts"> 
    <div className="top">
      <h1>{type} PETS</h1>
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

export default FeaturedProducts1