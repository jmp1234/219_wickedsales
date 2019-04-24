import types from './types';
import axios from 'axios';


export function signIn(user) {
  return function(dispatch) {
    axios.get('/api/sign-in.php').then(resp => {
      console.log('Sign In Resp: ', resp);

      if(resp.data.success) {
        dispatch({
          type: types.SIGN_IN
        })
      } else {
        dispatch({
          type: types.SIGN_IN_ERROR
        })
      }


    })
  }
//when an action gets dispatched, it goes to the reducer
  // return {
  //   type: types.SIGN_IN, //this will be used in the reducers to tell the state how to update
  //   email: user.email
  // }

}



export function signOut(user) {

  return {
    type: types.SIGN_OUT
  }
}

export function getAllProducts() {
  return function(dispatch) {
    axios.get('/api/getproducts.php').then( (resp) => {

      dispatch({
        type: types.GET_ALL_PRODUCTS,
        products: resp.data.products
      })
    });
  }
}
