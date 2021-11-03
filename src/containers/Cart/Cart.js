import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

//import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import { useSelector } from 'react-redux'





const Cart = () => {


   const cart = useSelector((state) => state.allProducts.cart);
   console.log(cart)
   //ako nemame redux tuku context i reducer ova ide vo initial state tamu kako bi imale LocalStorage opcija. Vaka reload prviot cart pak ke bide empty i nema logika voopsto LS na browserot.

   // get from LS
   // const [cartLS, setCartLS] = useState(
   //    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
   // )

   const [totalPrice, setTotalPrice] = useState(0)
   const [totalItems, setTotalItems] = useState(0)



   useEffect(() => {
      let price = 0;
      let items = 0;

      cart.forEach(item => {
         items += item.qty;
         price += item.qty * item.price;
      })
      setTotalPrice(price);
      setTotalItems(items)

      // localStorage.setItem('cart', JSON.stringify(cart)) set in LS
   }, [totalItems, totalPrice, cart, setTotalItems, setTotalPrice])
   //call useEffect if anythig in de.array changes



   return (
      <div className={styles.cart}>
         <div className={styles.cart__items}>
            {cart.map((item) => (
               <CartItem key={item.id} itemData={item} />
            ))}
         </div>
         <div className={styles.cart__summary}>
            <h4 className={styles.summary__title}>Cart Summary</h4>
            <div className={styles.summary__price}>
               <span>TOTAL: ({totalItems} items)</span>
               <span>$ {totalPrice}</span>
            </div>
            <button className={styles.summary__checkoutBtn}>
               Proceed To Checkout
            </button>
         </div>
      </div>
   );
};



// const mapStateToProps = (state) => {
//    return {
//       cart: state.shop.cart, //ja barame cart-ata za da imame kako props
//    }
// }

// export default connect(mapStateToProps)(Cart);

export default Cart;