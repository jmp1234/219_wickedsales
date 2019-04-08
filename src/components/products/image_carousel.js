import React, {Component} from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const config = {
      numVisible: 1,
      indicators: true,
      fullWidth: true
    };

    M.Carousel.init(this.carousel, config);
  }


  render() {

    const items = this.props.images.map( (image, index) => {
      return(
        <a className="carousel-item" key={image} href="#">
          <img src={`/dist/${image}`} alt="Product Image"/>
        </a>
      )
    })

    return(
      <div ref={(element) => this.carousel = element} className="carousel carousel-slider col s12 m8">
        {items}
      </div>
    )

  }
}

export default ImageCarousel;
