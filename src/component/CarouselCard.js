import React, { Component } from 'react';

class CarouselCard extends Component {
  render() {
    const { containerClass, coverImage, label, title, personImage, personName, personRole, downloadCount } = this.props;
    return (
      <div className={containerClass}>
        <div className="section">
          <img src={coverImage} alt="" />
          <div className="label">{label}</div>
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
            <div className="detail-wrap">
              <div className="add-btn">
                <a href="#section"> + Add</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselCard;