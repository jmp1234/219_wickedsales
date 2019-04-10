import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import {Route, Switch} from 'react-router-dom';
import ProductRoutes from './products';
import Home from './home';
import Nav from './nav';
import NotFound from './404';
import Cart from './cart';

const App = () => (
    <div>
        <div className="app">
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={ProductRoutes} />
              <Route path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
    </div>
);

export default App;
