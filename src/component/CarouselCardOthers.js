import React, { Component } from 'react';

class CarouselCardOthers extends Component {
  render() {
    const { coverImage, label, title, personImage, personName, personRole, downloadCount } = this.props;
    return (
      <div>
        <div className="slider-item">
          <img src={coverImage} alt="" />
          <div className="label2">{label}</div>
          <div className="sec-title">{title}</div>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>

          <div className="detail">
            <div className="detail-wrap">
              <div className="sec-subtitle">Uploaded by</div>
              <div className="img-wrap">
                <img src={personImage} alt="" />
                <div className="sec-wrap">
                  <div className="sec-person">
                    {personName}
                  </div>
                  <div className="sec-person-role">
                    {personRole}
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="sec-subtitle">Downloaded by</div>
              <div className="sec-person">{downloadCount}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselCardOthers;