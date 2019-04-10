import React, {Component} from 'react';

class ProductAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 1
    }

    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    console.log('add', this.state.qty, 'products to cart, ID: ', this.props.productId);
  }

  incrementQty() {
    this.setState({
      qty: this.state.qty + 1
    });
  }

  decrementQty() {
    if(this.state.qty > 1) {
      this.setState({
        qty: this.state.qty - 1
      })
    }
  }

  render() {
    return (
      <div className="right-align add-to-cart">
        <span className="qty-container">
          <button onClick={this.decrementQty}className="btn btn-small btn-floating purple lighen-1">
            <i className="material-icons">remove</i>
          </button>
          <span className="product-qty">{this.state.qty}</span>
          <button onClick={this.incrementQty}className="btn btn-small btn-floating purple lighen-1">
            <i className="material-icons">add</i>
          </button>
        </span>

        <button onClick={this.addToCart}className="btn purple darken-2">
          <i className="material-icons">add_shopping_cart</i>
        </button>
      </div>
    )
  }
}

export default ProductAdd;
