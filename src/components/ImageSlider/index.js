import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import './styles.scss'

class ImageSlider extends React.Component{
    state = {
        current: 0
    }

    static defaultProps = {
        images: [""],
      };

      nextSlide = (current,length) => {
            this.setState({
                current: current === length -1 ? 0 : current +1
            })
      }

      prevSlide = (current,length) => {
        this.setState({
            current: current === 0 ? length - 1  : current - 1
        })
  }




    render() {
        const {images} = this.props
       
        const {current} =this.state
        const length = images.length
        return(
            <div className="slider">
        <IoIosArrowBack className='left-arrow' onClick={() =>this.prevSlide(current, length)}/>
     
                {images.map((slide,index) => {
                    return(
                        <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                      >
                        {index === current && (
                          <img src={slide} alt='travel' className='image' />
                        )}
                      </div>
                    )
                })}

<IoIosArrowForward className='right-arrow' onClick={() =>this.nextSlide(current, length)}/>
            </div>
        )
    }
}

export default ImageSlider