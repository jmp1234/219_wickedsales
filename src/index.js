import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'; //provides the information the application needs
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import think from './middleware/think';
import types from './actions/types';
import {checkAuth} from './actions';
import App from './components/app';

const store = createStore(rootReducer, applyMiddleware(think)); //takes rootReducer, and builds your state the first time and handles updates down the road

if(localStorage.getItem('signedIn') === 'true') {
   store.dispatch({
     type: types.SIGN_IN,
     email: 'loading'
   });

   checkAuth()(store.dispatch);
}

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
