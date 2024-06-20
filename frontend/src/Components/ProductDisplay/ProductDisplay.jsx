import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';



export default function ProductDisplay(props) {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);



  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src= {star_icon} alt="" />
                <img src= {star_icon} alt="" />
                <img src= {star_icon} alt="" />
                <img src= {star_icon} alt="" />
                <img src= {star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className='productdisplay-right-price-old'>
                    Rs.{product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    Rs.{product.new_price}
                </div>
            </div>

            <div className='productdisplay-right-description'>
            Since our establishment in 1993, JAT Holdings has risen in corporate reputation, financial strength and brand recognition. Becoming one of the Top Strongest Conglomerate Brands in Sri Lanka in 2015, the company is now diversifying and expanding confidently, following best practices and earning credit for its green efforts.
            </div>
            <button onClick={()=>{addToCart(product.id)} } >ADD TO CART</button>
        </div>

      
    </div>
  )
}
