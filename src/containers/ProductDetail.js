import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct, addToCart } from '../redux/actions/productActions'
import { useSelector, useDispatch } from 'react-redux'



function ProductDetail() {


   const product = useSelector((state) => state.oneProduct)
   //console.log(product)



   const { productId } = useParams()
   //console.log(productId)

   const dispatch = useDispatch();

   const fetchProductDetail = async () => {

      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.data;//so axios ne ni treba response.json().Its parsed from axios already
      dispatch(selectedProduct(data))
   }

   useEffect(() => {

      if (productId && productId !== '') {
         fetchProductDetail();

         return () => {
            dispatch(removeSelectedProduct()) //clean the selected product details
         }
      }
   }, [productId])



   return (
      <div className="ui grid container">
         {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
         ) : (
            <div className="ui placeholder segment">
               <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider">AND</div>
                  <div className="middle aligned row">
                     <div className="column lp">
                        <img className="ui fluid image" src={product.image} />
                     </div>
                     <div className="column rp">
                        <h1>{product.title}</h1>
                        <h2>
                           <a className="ui teal tag label">${product.price}</a>
                        </h2>
                        <h3 className="ui brown block header">{product.category}</h3>
                        <p>{product.description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                           <div className="hidden content">
                              <i className="shop icon"></i>
                           </div>


                           <button className="visible content"
                              // Check ?
                              onClick={() => dispatch(addToCart(product.id))}
                              className='btn' >
                              Add To Cart
                           </button>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )
         }
      </div >
   );


}




export default ProductDetail
