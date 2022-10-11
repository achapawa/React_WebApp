import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import ProductService from '../services/ProductService';


const AddProducts = () => {
    const [productName, setProductName]=useState("")
    const [imgUrl, setImgUrl]=useState("")
    const [productPrice, setProductPrice]=useState(0)
    const [productQnty, setProductQnty]=useState(0)

    const saveProduct =(e) => {
        e.preventDefault();

        const product ={productName, imgUrl, productPrice, productQnty}

        ProductService.createProduct(product).then((response)=>{
            console.log(response.data)
        }).catch(error =>{
            console.log(error)
        })

    }

  return (
    
    <div>
    <h1>Here</h1>
           <br /><br />
           <div>
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                          // title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Product Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Product name"
                                        name = "productName"
                                        className = "form-control"
                                        value = {productName}
                                        onChange = {(e) => setProductName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Product Img Link :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Image Link for the product"
                                        name = "ImgUrl"
                                        className = "form-control"
                                        value = {imgUrl}
                                        onChange = {(e) => setImgUrl(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type="number"
                                        placeholder = "Enter price for the item"
                                        name = "price"
                                        className = "form-control"
                                        value = {productPrice}
                                        onChange = {(e) => setProductPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Quantity :</label>
                                    <input
                                        type="number"
                                        placeholder = "Enter the number of items"
                                        name = "qnty"
                                        className = "form-control"
                                        value = {productQnty}
                                        onChange = {(e) => setProductQnty(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveProduct(e)} >Submit </button>
                                <Link to="/admin" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
  )
}

export default AddProducts;