import React from 'react'
import "./Product.scss"
import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [SelectedImg,setSelectedImg] =useState(0);
  const[quantity,setquantity]=useState(1);
  const images =[
   "https://i.pinimg.com/564x/0f/95/6c/0f956c8593a195acb8fc5e314323d619.jpg",
   "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-11/owner-of-golden-retriever-poisoned-main-zz-221116-5e110d.jpg"

  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]}alt='' onClick ={e=>setSelectedImg(0)}/>
          <img src={images[1]}alt=''onClick ={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
        <img src={images[SelectedImg]} alt="" />
        </div>
        
      </div>
      <div className="right">
        <h1>GOLDEN RETRIVER</h1>
        <span>PRICE - 1500 ₹</span>
        <p>Golden Retriever
Golden retrievers are smart, loyal dogs that are ideal family companions. With their gentle nature, shining coats, and charming smiles, they are considered one of the most popular breeds in America. Learn more about living with these people-pleasing pups.</p>
<div className="quantity">
  <button onClick={()=>setquantity((prev)  => (prev ===1 ? 1  : prev-1))}>-</button>
  {quantity}
  <button onClick={()=>setquantity ((prev) =>prev +1)}>+</button>
</div>
<button className='add'>
  <AddShoppingCartIcon/> ADD TO CART
</button>
<div className="link">
  <div className="item">
    <FavoriteBorderIcon/> ADD TO WISHLIST
  </div>
  <div className="item">ADD TO COMPARE
    <BalanceIcon/>
  </div>
</div>
<div className="info">
              <span>COLORS- cream gold / yellow</span>
              <span>WEIGHT- 55-75 pounds</span>
              <span>OTHER TRAITS- 
easy to train
requires lots of grooming
tendency to chew
high potential for weight gain
loves water
good for first-time pet owners
strong loyalty tendencies</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
      
    </div>
  )
}

export default Product
