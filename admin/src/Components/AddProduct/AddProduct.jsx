import React, { useState } from 'react';
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "electrical",
        old_price: "",
        new_price: ""
    });

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data });

        if (responseData.success) {
            const updatedProductDetails = { ...productDetails, image: responseData.img_url };
            console.log(updatedProductDetails);

            // Update the product details state with the new image URL
            setProductDetails(updatedProductDetails);

            // Now you can send the product details to your backend
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProductDetails)
            }).then((resp) => resp.json()).then((data) => {
                if (data.success) {
                    alert("Product added");
                    console.log('Product added successfully');
                }
            });
        }
    };

    return (
        <div className='addproduct'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
            </div>

            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
                </div>
            </div>

            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector' >
                    <option value="building"> BUILDING</option>
                    <option value="electrical"> ELECTRICAL</option>
                    <option value="paint"> PAINT</option>
                </select>
            </div>

            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
    );
}

export default AddProduct;
