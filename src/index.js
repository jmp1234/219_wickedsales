import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'; //provides the information the application needs
import { createStore } from 'redux';
import rootReducer from './reducers';

import App from './components/app';

const store = createStore(rootReducer); //takes rootReducer, and builds your state the first time and handles updates down the road

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
