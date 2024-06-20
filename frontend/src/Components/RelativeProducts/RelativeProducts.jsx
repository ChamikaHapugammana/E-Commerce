import React from 'react'
import "./RelativeProducts.css"
import data_product from "../Assets/data"
import Item from "../Item/Item"


export default function RelativeProducts() {
  return (
    <div className='relativeproducts'>
      <h1>Relative Products</h1>
      <div className="relativeproducts-item">
        {data_product.map((item,i)=>{
            return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
        })}
      </div>
    </div>
  )
}
