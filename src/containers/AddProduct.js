import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dodadiProduct } from '../redux/actions/productActions'
import { useHistory } from 'react-router';


function AddProduct() {

   //const products = useSelector((state) => state.allProducts.products);


   const products = useSelector((state) => state.allProducts.products);
   console.log(products)


   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [category, setCategory] = useState('');

   const dispatch = useDispatch();
   const history = useHistory();


   const handleSubmit = (e) => {
      e.preventDefault();


      const data = {
         id: products[products.length - 1].id + 1,
         title: title,
         price: price,
         category: category
         // or es6 short: title, price,category
      }

      console.log(data)
      dispatch(dodadiProduct(data))
      history.push("/");
   };





   return (
      <div className="container">
         <div className="row">
            <div className="display-3 my-5 text-center">
               Add Product
            </div>
            <div className="col-md-6 shadow mx-auto">

               <form onSubmit={handleSubmit}>

                  <div className="form-group">
                     <input
                        type='text'
                        placeholder='Title'
                        className='form-control'
                        value={title} onChange={(e) => setTitle(e.target.value)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type='text'
                        placeholder='Price'
                        className='form-control'
                        value={price} onChange={(e) => setPrice(e.target.value)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type='text'
                        placeholder='Category'
                        className='form-control'
                        value={category} onChange={(e) => setCategory(e.target.value)}
                     />
                  </div>
                  <div className="form-group">
                     <input type='submit' value='Add Product' className='btn btn-block btn-dark' />
                  </div>
               </form>
            </div>
         </div>

      </div>
   )
}

export default AddProduct
