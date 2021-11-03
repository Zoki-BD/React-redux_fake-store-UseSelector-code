import { createStore } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';//za da imame redux vo console pregledot


const store = createStore(reducers, {},
   // productReducer,
   composeWithDevTools() //if we go with: npm install redux-devtools-extension

   //if we go with direct extension without npm
   //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;