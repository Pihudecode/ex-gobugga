import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    const {title, children} = this.props;
    return (
      <div class="main">
        <div class="main-wrap">
          <div class="header_wrap">
            <h2>{title}</h2>
            <div class="view">View All</div>
          </div>
          <div class="row">
            {children}
          </div>
          <div class="arrow-sec">
            <span>
              <i class="fas fa-angle-left"></i></span>
            <span>
              <i class="fas fa-angle-right"></i></span>
          </div>
        </div>
      </div >
    );
  }
}

export default Carousel;
