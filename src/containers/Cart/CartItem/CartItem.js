import React, { useState } from "react";
import styles from "./CartItem.module.css";
import CartImage from './cart.PNG'

import { useSelector, useDispatch } from 'react-redux'
import { adjustItemQty, removeFromCart } from '../../../redux/actions/productActions'

//!!!!! if its connect aproach
//import { connect } from "react-redux";
// import {
//    adjustItemQty,
//    removeFromCart,
// } from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData }) => {

   console.log(CartImage)

   const [changedQty, setChangedQty] = useState(itemData.qty)

   const dispatch = useDispatch();

   const onChangeHandler = (e) => {
      setChangedQty(e.target.value);
      dispatch(adjustItemQty(itemData.id, e.target.value));
   }


   return (
      <div className={styles.cartItem}>
         <img
            className={styles.cartItem__image}
            src={itemData.image}
            alt={itemData.title}
         />
         <div className={styles.cartItem__details}>
            <p className={styles.details__title}>{itemData.title}</p>
            <p className={styles.details__desc}>{itemData.description}</p>
            <p className={styles.details__price}>$ {itemData.price}</p>
         </div>
         <div className={styles.cartItem__actions}>
            <div className={styles.cartItem__qty}>
               <label htmlFor="qty">Qty</label>
               <input
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  value={changedQty}
                  onChange={onChangeHandler}
               />
            </div>
            <button
               onClick={() => dispatch(removeFromCart(itemData.id))}
               className={styles.actions__deleteItemBtn}
            >
               <img
                  src={CartImage}
                  alt="cart picture"
               />
            </button>
         </div>
      </div>
   );
};

//!!!!! if its connect aproach

// const mapDispatchToProps = (dispatch) => {
//    return {
//       adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
//       removeFromCart: (id) => dispatch(removeFromCart(id)),
//    };
// };
// export default connect(null, mapDispatchToProps)(CartItem);

export default CartItem;