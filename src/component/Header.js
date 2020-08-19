import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
      <nav class="row container-fluid no-gutters">
          <h2 class="logo col-5 col-md-6 col-lg-7 col-xl-8">
              GoBudG<span>@</span>
          </h2>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
              <ul>
                  <li><i class="fas fa-search"></i></li>
                  <li><i class="fas fa-comment-dots"></i></li>
                  <li><i class="fas fa-tv"></i></li>
                  <li><i class="fas fa-bell"></i></li>
              </ul>
          </div>
          <div class="text-right">
              <ul>
                  <li><i class="fas fa-portrait"></i></li>
                  <li><i class="fas fa-cog"></i></li>
                  <li><i class="fas fa-sign-out-alt"></i></li>
              </ul>
          </div>
      </nav>
  </header>
    );
  }
}

export default Header;
