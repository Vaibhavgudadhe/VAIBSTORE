import React from 'react'
import  { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.scss";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data=[
        "https://img.freepik.com/free-vector/two-girls-with-many-dogs-living-room_1308-79958.jpg?w=1060&t=st=1675885894~exp=1675886494~hmac=e422e47a3b6aa3b4c475c5665ace2975bbbe5e22bb06948c37d5b79a66ec16a5",
        "https://cdn.shopify.com/s/files/1/1876/1163/articles/different_dog_breeds_845x450.jpg?v=1549800021",
        "https://i.pinimg.com/originals/23/53/da/2353daec9e8173ec40037e409131d70d.jpg"
    ];
    const prevSlide =()=>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev -1)
    }
    const nextSlide =()=>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1 );
    }
  return (
    
      <div className="slider">
        <div className="container"style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                
            <EastIcon/>
            </div>
        </div>
      </div>
    
  )
}

export default Slider;
