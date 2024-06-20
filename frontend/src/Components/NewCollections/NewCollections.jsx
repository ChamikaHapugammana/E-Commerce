import React, { useEffect, useState } from 'react'
import "./NewCollections.css"
import Item from '../Item/Item'

export default function NewCollections() {

  const [new_collection,setNewCollection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=> setNewCollection(data));
  },[])


  return (
    <div className='new-collections'>
      <h1>LATEST PRODUCTS</h1>
      <div className="collections">
        {new_collection.map((item,i) => {
            return(<Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />)
        } )}
      </div>
    </div>
  )
}
