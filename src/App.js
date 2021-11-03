
import './App.css';

import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddProduct from './containers/AddProduct';
import Navbar from './containers/Navbar/Navbar'
import Cart from './containers/Cart/Cart'

function App() {
   return (
      <div className='App'>

         <Router Router >
            <Navbar />

            <Switch>
               <Route path='/' exact component={ProductListing} />
               <Route exact path="/cart" component={Cart} />
               <Route path='/add' component={() => <AddProduct />}>
                  <AddProduct />
               </Route>
               <Route path='/product/:productId' component={ProductDetail} />
               <Route>404 Not Found!</Route>
            </Switch>
         </Router >

      </div >
   );
}

export default App;
