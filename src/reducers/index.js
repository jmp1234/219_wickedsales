import { combineReducers } from 'redux'; //bring all of the reducers together
import userReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  user: userReducer //how i access whatever my reducer returns.  This defines the shape of the state
});

// cosnt state = {
//   form: {},
//   user: {
//     auth: false,
//     userName: ''
//   }
// }



// const state = {
//   user: {
//     auth: false,
//     username: 'Steve'
//   },
//   products: {
//     list: [],
//     productDetails: {}
//   },
//   cart: {
//     totalItems: 4,
//     totalCost: 8900,
//     items: []
//   }
// }

export default rootReducer;
