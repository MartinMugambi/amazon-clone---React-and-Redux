import React, { useEffect, useState } from "react";
import './product_feed.css';
import axios from 'axios';
import Product from './product';
import SectionBanner from "./section_banner";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ProductFeed =()=>{
     const[products, setProducts] = useState([]);
     const [loading, setLoading] =  useState(true);
    useEffect(()=>{
     axios.get('https://fakestoreapi.com/products').then(response =>{
          setProducts(response.data);
          setLoading(false)
     }).catch(error =>{
         console.log(error);
         setLoading(false);
         
     });
    },[])

    

    const productList = products.slice(0, 4).map(product => <Product className= 'product__one' key= {product.id}  id= {product.id} title ={product.title} category= {product.category} description= {product.description} image= {product.image} price= {product.price} rating= {product.rating.rate}    />);

    const productList2 = products.slice(4, 8).map(product => <Product key= {product.id}  id= {product.id} title ={product.title} category= {product.category} description= {product.description} image= {product.image} price= {product.price} rating= {product.rating.rate}    />);
    const productList3 = products.slice(8, products.length).map(product => <Product key= {product.id}   id= {product.id} title ={product.title} category= {product.category} description= {product.description} image= {product.image} price= {product.price} rating= {product.rating.rate}    />);
    return(
        <div className= 'product__feed'>
           {loading && <Loader className ="product__spinner"
              type="TailSpin"
              color="#f3c451"
              height={60}
              width={60}
            />  }
            <div className= 'product__one'>
           {productList}
           </div>
           <SectionBanner />
           <div className= 'product__two'>
           {productList2}
           </div>
           <div className= 'product__three'>
           {productList3}
           </div>
        </div>
    );
}

export default ProductFeed;