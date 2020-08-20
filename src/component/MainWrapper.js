import React, { Component } from 'react';
import CarouselCardPopular from './CarouselCardPopular';
import CarouselCardOthers from './CarouselCardOthers';
import Slider from './Slider';
import { Dropdown } from "react-bootstrap";


class MainWrapper extends Component {
  render() {
    return (
      <div className="main col-8 col-sm-8 col-md-9">
        <div className="container-fluid d-flex justify-content-end light-shadow py-lg-2 py-xl-3">
          <Dropdown>
            <Dropdown.Toggle variant="success flt-btn" id="dropdown-basic">
              Filter <i className="fas fa-sort-amount-down-alt"></i>  </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Rating</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Low to High</Dropdown.Item>
              <Dropdown.Item href="#/action-2">High to Low</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Slider title="Popular Resources" >
          <CarouselCardPopular
            coverImage="img/christin-hume-Hcfwew744z4-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCardPopular
            coverImage="img/dollar-gill-0V7_N62zZcU-unsplash@2x.jpg"
            label="Calculator"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCardPopular
            coverImage="img/blaz-photo-zMRLZh40kms-unsplash@5x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
        </Slider>


        <Slider title="Other Resources" >
          <CarouselCardOthers
            coverImage="img/christin-hume-Hcfwew744z4-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCardOthers
            coverImage="img/rashtravardhan-kataria-m-D_PAxLcTo-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCardOthers
            coverImage="img/bench-accounting-C3V88BOoRoM-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
        </Slider>
      </div >
    );



  }
}

export default MainWrapper;
