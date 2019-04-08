import React, {Component} from 'react';
import axios from 'axios';
import ImageCarousel from './image_carousel';
import { formatMoney } from '../../helpers';
import MiscDetails from './misc_details';

class ProductDetails extends React.Component {

  state = {
    details: null
  }

  async componentDidMount() {


    const {params} = this.props.match;
    //Call server to get product details

    const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

    if(resp.data.success) {
      this.setState({
        details: resp.data.productInfo
      });
    } else {
      this.setState({
        details: false
      });
    }



  }



  render() {
    const{details} = this.state;

    if(details === null) {
      return <h1>loading...</h1>
    } else if(!details) {
      return <h1 className="center">No Product Found</h1>
    }

    const {description = 'No description available', name, images, miscDetails, price} = details;


    return(
      <div className="product-details">
        <h1 className="center">{name}</h1>
        <div className="row">
          <ImageCarousel  images={images}/>
          <div className="col s12 m4">
            <div className="right-align product-price">{formatMoney(price)}</div>
            <div className="right-align add-to-cart">
              <span className="qty-container">
                <button className="btn btn-small btn-floating purple lighen-1">
                  <i className="material-icons">remove</i>
                </button>
                <span className="product-qty">1</span>
                <button className="btn btn-small btn-floating purple lighen-1">
                  <i className="material-icons">add</i>
                </button>
              </span>

              <button className="btn purple darken-2">
                <i className="material-icons">add_shopping_cart</i>
              </button>
            </div>
            <p>{description}</p>
            <MiscDetails details={miscDetails}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails;
