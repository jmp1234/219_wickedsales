import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Modal from '../modal';
import {formatMoney} from '../../helpers';

class ProductAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 1,
      modalOpen: false,
      totalPrice: 0,
      cartQty: 0
    }

    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.goToCart = this.goToCart.bind(this);
  }

  addToCart() {

    const {productId, updateCart} = this.props;
    const {qty} = this.state;

    axios.get(`/api/addcartitem.php?product_id=${productId}&quantity=${qty}`).then(resp => {

      const {cartCount, cartTotal} = resp.data;
      updateCart(cartCount);

      this.setState({
        modalOpen: true,
        cartQty: cartCount,
        totalPrice: cartTotal
      })
    });
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

  closeModal() {
    this.setState({
      modalOpen: false,
      qty: 1
    })
  }

  goToCart() {
    this.props.history.push('/cart');
  }


  render() {
    const {modalOpen, cartQty, totalPrice, qty} = this.state;

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
        <Modal
          isOpen={modalOpen}
          defaultAction={this.closeModal}
          defaultActionText="Continue Shopping"
          secondaryAction={this.goToCart}
          secondaryActionText="View Cart"
        >
          <h1 className="center">{qty} Item{qty > 1 && 's'} Added to Cart</h1>
          <div className="row">
            <div className="col s6">Cart Total Items:</div>
            <div className="col s6 left-align">{cartQty}</div>
          </div>
          <div className="row">
            <div className="col s6">Cart Total Price:</div>
            <div className="col s6 left-align">{formatMoney(totalPrice)}</div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default withRouter(ProductAdd);
