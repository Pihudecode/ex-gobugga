import React, { Component } from 'react';
import Carousel from './Carousel';
import CarouselCard from './CarouselCard';

class MainWrapper extends Component {
  render() {
    return (
      <div class="main col-8 col-sm-8 col-md-9">
        <div class="container-fluid d-flex justify-content-end light-shadow py-lg-2 py-xl-3">
          <button class="flt-btn">Filter <i class="fas fa-sort-amount-down-alt"></i></button>
        </div>
        <Carousel title="Popular Resources">
          <CarouselCard 
            containerClass="col-md-6 col-xl-4"
            coverImage="img/christin-hume-Hcfwew744z4-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCard 
            containerClass="col-md-6 d-none d-md-block col-xl-4"
            coverImage="img/dollar-gill-0V7_N62zZcU-unsplash@2x.jpg"
            label="Calculator"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCard 
            containerClass="col-md-4 col-xl-4 d-none d-xl-block"
            coverImage="img/blaz-photo-zMRLZh40kms-unsplash@5x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
        </Carousel>
        <Carousel title="Other Resources">
          <CarouselCard 
            containerClass="col-md-6 col-xl-4"
            coverImage="img/christin-hume-Hcfwew744z4-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCard 
            containerClass="col-md-6 d-none d-md-block col-xl-4"
            coverImage="img/rashtravardhan-kataria-m-D_PAxLcTo-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
          <CarouselCard 
            containerClass="col-md-4 col-xl-4 d-none d-xl-block"
            coverImage="img/bench-accounting-C3V88BOoRoM-unsplash@2x.jpg"
            label="Algebra"
            title="Number Theory Course"
            personImage="img/brooke-cagle-n1m25jvupEU-unsplash@5x.jpg"
            personName="Zoya Hellen"
            personRole="Tutor"
            downloadCount={135}
          />
        </Carousel>

        
      </div >
    );
  }
}

export default MainWrapper;
