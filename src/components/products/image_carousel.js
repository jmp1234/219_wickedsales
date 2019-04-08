import React, {Component} from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const imageList = this.props.images.map( (image, index) => {
      return(
        <a key={index} className="carousel-item">
          <img key={index} src={`/dist/${image}`}/>
        </a>
      )
    })

    return(
      <React.Fragment>
      {imageList}
      </React.Fragment>
    )
  }
}

export default ImageCarousel;
