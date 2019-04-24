import React, {Component} from 'react';
import axios from 'axios';
import ProductItem from './product_item';
import {connect} from 'react-redux';
import { getAllProducts } from '../../actions';

class ProductList extends React.Component {
  constructor(props) {
    super(props);


    this.goToDetails = this.goToDetails.bind(this);
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  goToDetails(id) {

    this.props.history.push(`/products/${id}`);
  }


  render() {
    console.log('Product List Props: ', this.props)
    const productList = this.props.products.map( product => {
      return <ProductItem goToDetails={this.goToDetails} key={product.id} {...product}/>
    });

    return(
      <div className="product-list">
        <h1 className="center">Wicked Product List</h1>
        <ul className="collection">
          {productList}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    products: state.products.list
  }
}

export default connect(mapStateToProps, {
  getAllProducts: getAllProducts
})(ProductList);
