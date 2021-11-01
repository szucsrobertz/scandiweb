import React from "react";

import './styles.scss'

class Carousel extends React.Component{
    state = {
        active: 0,
      };
    
      static defaultProps = {
        images: [""],
      };
    
      handleIndexClick = (event) => {
        this.setState({
          active: +event.target.dataset.index,
        });
      }
    
    render(){
        const { active } = this.state;
        const { images } = this.props;

        return(
            <div className="carousel">
        <div className="carousel-smaller">
          {images.map((photo, index) => (
              <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : " "}
              alt="product-thumbnail"
              />
              ))}
        </div>
        <img src={images[active]} alt="product" className="car"/>
      </div>
        )
    }
}

export default Carousel
