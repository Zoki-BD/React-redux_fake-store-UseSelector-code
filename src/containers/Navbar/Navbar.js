import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from 'react-redux'
// import { connect } from "react-redux";




const Navbar = () => {

   const cart = useSelector((state) => state.allProducts.cart);

   const [cartCount, setCartCount] = useState(0)
   // console.log(cart)

   useEffect(() => {
      let count = 0;
      cart.forEach(item => {
         count += item.qty;  //check all qty of the items, soberi i setcartCount
      });

      setCartCount(count)
   }, [cart, cartCount])


   return (
      <div className={styles.navbar}>

         <Link to="/">
            <h2 >Redux Shopping Cart</h2>
         </Link>
         <Link to="/cart">
            <div className={styles.navbar__cart}>
               <h3 className={styles.cart__title}>Cart</h3>
               <img
                  className={styles.cart__image}
                  src="https://image.flaticon.com/icons/svg/102/102276.svg"
                  alt=" cart"
               />
               <div className={styles.cart__counter}>{cartCount}</div>
            </div>
         </Link>
      </div>
   );
};

// const mapStateToProps = (state) => {
//    return {
//       cart: state.shop.cart, //ja barame cart-ata za da proverime
//    }
// }

// export default connect(mapStateToProps)(Navbar);

export default Navbar;