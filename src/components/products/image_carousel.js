import React, {Component} from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('carousel div: ', this.carousel);

    M.Carousel.init(this.carousel);
  }


  render() {

    const items = this.props.images.map( (image, index) => {
      return(
        <a className="carousel-item" key={image} href="#">
          <img  src={`/dist/${image}`} alt="Product Image"/>
        </a>
      )
    })

    return(
      <div ref={(element) => this.carousel = element} className="carousel col s3">
        {items}
      </div>
    )

  }
}

export default ImageCarousel;
