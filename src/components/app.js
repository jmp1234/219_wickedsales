import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import {Route} from 'react-router-dom';
// import ProductRoutes from './products/index';
import ProductRoutes from './products';
import Home from './home';
import Nav from './nav';

const App = () => (
    <div>
        <div className="app">
          <Nav />
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={ProductRoutes} />
          </div>
        </div>
    </div>
);

export default App;
