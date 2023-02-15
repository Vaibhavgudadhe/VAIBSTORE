import React from 'react'
import "./Cart.scss";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
      
          id: 1,
          img:  "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-11/owner-of-golden-retriever-poisoned-main-zz-221116-5e110d.jpg",
          img2:"https://i.pinimg.com/564x/0f/95/6c/0f956c8593a195acb8fc5e314323d619.jpg",
         
         title: "DOGS",
         desc: "GOLD RETRIVER",
         isNew:true,
         oldPrice:19,
         price:12,
        },
        {

            id: 2,
            img:  "https://i.pinimg.com/564x/0f/95/6c/0f956c8593a195acb8fc5e314323d619.jpg",
         
           title: 'DOG',
           desc :'GOLDEN RETRIVER',
           isNew:true,
           oldPrice:19,
           price:12,
          },
    ]
  return (
    <div  className='cart'>
        <h1>Product in your cart</h1>
        {data?.map((item) => (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.tittle}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">₹1500*{item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete"/>
            </div>

        ))}
  <div className="total">
    <span>SUBTOTAL</span>
    <span>₹ 2999</span>
  </div>
  <button>PROCEED TO CHECKOUT</button>
  <span className="reset">RESET CART</span>
    </div>
  )
}

export default Cart
