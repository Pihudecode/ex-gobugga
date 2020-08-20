import React, { Component } from 'react';

import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel/lib/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handeCarouselChange = (newIndex) => {
    this.setState({
      slideIndex: newIndex
    });
  }

  handlePreviousClick = (event) => {
    console.log('handlePreviousClick');
    this.setState({
      slideIndex: this.state.slideIndex - 1
    })
  }

  handleNextClick = (event) => {
    console.log('handleNextClick');
    this.setState({
      slideIndex: this.state.slideIndex + 1
    });
  }

  render() {
    return (
      <div className="main">
        <div className="main-wrap">
          <div className="header_wrap">
            <h2>{this.props.title}</h2>
            <div className="view">View All</div>
          </div>
          <div className="row">
            <Carousel
              value={this.state.slideIndex}
              onChange={this.handeCarouselChange}
              infinite={true}
              slidesPerPage={3}
              clickToChange={true}
              itemWidth={360}
              draggable={true}
              addArrowClickHandler={true}
              breakpoints={{
                480: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1
                      }
                    },
                  ]
                },
                900: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2
                      }
                    },
                  ]
                },
                1100: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 3
                      }
                    },
                  ]
                }
              }}
            >
              {this.props.children}
            </Carousel>
          </div>
          <div className="arrow-sec">
            <span role="button" onClick={this.handlePreviousClick}>
              <i className="fas fa-angle-left"></i></span>
            <span role="button" onClick={this.handleNextClick}>
              <i className="fas fa-angle-right"></i></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;