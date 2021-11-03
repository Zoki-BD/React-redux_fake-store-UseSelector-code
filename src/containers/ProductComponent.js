import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom'

import { izbrisiProduct, addToCart } from '../redux/actions/productActions'



function ProductComponent() {


   const products = useSelector((state) => state.allProducts.products);

   console.log(products)

   const dispatch = useDispatch()

   const renderList = products.map(product => {
      return (
         <div key={product.id} className='four wide column'>
            {/* whole div is in Link to anywhere clicked sents us to details */}
            <Link to={`/product/${product.id}`}>
               <div className="ui link cards">
                  <div className="card">
                     <div className="image">
                        <img src={product.image} alt={product.title} />
                     </div>
                     <div className="content">
                        <div className="header">{product.title} </div>
                        <div className="meta price">$ {product.price} </div>
                        <div className="meta">{product.category} </div>
                        {/* <ProductDetail /> */}
                     </div>
                  </div>
               </div>
            </Link>
            <button className='btn'
               onClick={() => dispatch(izbrisiProduct(product.id))}
            >Remove Item</button>
            <button
               onClick={() => dispatch(addToCart(product.id))}
               className='btn' >
               Add To Cart
            </button>
         </div>
      )
   })


   return (
      <>
         {renderList}
      </>
   )
}

export default ProductComponent
