import React from 'react'
import "./List.scss"
import Card from '../Card/Card'
const List = () => {
    const data = [
        {
      
          id: 1,
          img: "https://i.pinimg.com/564x/c6/90/39/c6903920f6fa0cafbf8fc39e7653cf7e.jpg",
          img2:"https://i.pinimg.com/564x/0a/1f/83/0a1f83deaa55bfb36ececa45c6eac6fd.jpg",
         title: "DUAL",
         isNew:true,
         oldPrice:11800,
         price:14000,
        },
        {
      
          id: 2,
          img:  "https://i.pinimg.com/564x/87/11/c0/8711c0109341c1ee5c62969585d5c5f7.jpg",
       
         title: 'HUSKY',
         isNew:true,
         oldPrice:19000,
         price:12000,
        },
        {
      
          id: 3,
          img:  "https://i.pinimg.com/564x/00/8f/82/008f829b94503c07d0cb7304c26268da.jpg",
       
         title: "BULL DOG",
         isNew:true,
         oldPrice:13000,
         price:9000,
        },
        {
      
          id: 4,
          img:  "https://i.pinimg.com/564x/cd/fe/e9/cdfee95e6fc8e179c8caba9f0185fd63.jpg",
       
         title: "PUG",
         isNew:false,
         oldPrice:1500,
         price:1200,
        },
      ]
    
  return (

    <div className='list'>{data?.map(item=>
    (<Card item={item} key={item.id}/>))}
      
    </div>
  )
}

export default List
