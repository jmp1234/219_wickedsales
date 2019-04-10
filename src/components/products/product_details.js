import React, {Component} from 'react';
import axios from 'axios';
import ImageCarousel from './image_carousel';
import { formatMoney } from '../../helpers';
import MiscDetails from './misc_details';
import ProductAdd from './product_add';

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
    const {params} = this.props.match;

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
            <ProductAdd productId={params.product_id}/>
            <p>{description}</p>
            <MiscDetails details={miscDetails}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails;
