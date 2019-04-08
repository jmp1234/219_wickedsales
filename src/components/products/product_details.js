import React, {Component} from 'react';
import axios from 'axios';
import ImageCarousel from './image_carousel';

class ProductDetails extends React.Component {

  state = {
    details: null
  }

  async componentDidMount() {


    const {params} = this.props.match;
    //Call server to get product details

    const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

    console.log(resp);

    if(resp.data.success) {
      this.setState({
        details: resp.data.productInfo
      });
    } else {
      this.setState({
        details: false
      });
    }

    this.createCarousel();

  }

  createCarousel() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems);

  }


  render() {
    const{details} = this.state;

    if(details === null) {
      return <h1>loading...</h1>
    } else if(!details) {
      return <h1 className="center">No Product Found</h1>
    }

    const {description = 'No description available', name, images} = details;


    return(
      <div className="product-details row">
        <div className="carousel col s3"><ImageCarousel  images={images}/></div>
        <h1 className="center">{name}</h1>
        <p className="center">{description}</p>
      </div>
    )
  }
}

export default ProductDetails;
