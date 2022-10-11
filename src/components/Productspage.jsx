import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService'
import Card from './Card'
import "../Styles/Card.css";
import "../Styles/Productspage.css";

function Productspage() {

  const [products, setProducts]=useState([])

  useEffect(() => {
    ProductService.getProducts().then((response)=>{
      setProducts(response.data)
      console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }, [])
  
  return (
    
    <div className="container-p">
      <div className="row">
      <div className='column'>
      {
        products.map(
          product=>
        <Card
          title={product.productName}
          images={product.imgUrl}
          old_price="9,999"
          newPrice={product.productPrice}
          dollar="$"
          alt="batman"
          exp_date={product.productQnty}
        />
          )
      }
      </div>
      </div>
      </div>
      
  )
}

export default Productspage;