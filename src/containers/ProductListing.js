import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';

import { setProducts } from '../redux/actions/productActions'

import { Link } from 'react-router-dom'

function ProductListing() {


   const products = useSelector((state) => state);
   //console.log(products)

   const dispatch = useDispatch();

   const fetchProducts = async () => {

      const response = await axios.get(`https://fakestoreapi.com/products`);
      const data = await response.data;//so axios ne ni treba response.json().Its parsed from axios already
      dispatch(setProducts(data))
   }

   useEffect(() => {
      fetchProducts()
   }, [])


   return (
      <div className='ui grid container'>

         {/* <Link to={`/add`}>Nov Produkt</Link> */}

         {products.allProducts.products.length === 0 ? (
            <div>...Loading</div>
         ) : (
            <ProductComponent />
         )}

      </div>
   )
}



export default ProductListing
