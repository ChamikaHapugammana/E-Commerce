import React, { useEffect, useState } from 'react'
import "./Popular.css"
import Item from '../Item/Item'

export default function Popular() {

  const [popularproducts,setpopularProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popular')
    .then((response)=> response.json())
    .then((data)=> setpopularProducts(data));
  },[])


  return (
    <div className='popular'>
        <h1>BEST SELLING PRODUCTS</h1>
        <div className="popular-item">
            {popularproducts.map((item,i) =>{
                return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            } )}
        </div>

      
    </div>
  )
}
