import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
      <nav className="row container-fluid no-gutters">
          <h2 className="logo col-5 col-md-6 col-lg-7 col-xl-8">
              GoBudG<span>@</span>
          </h2>
          <div className="col-4 col-md-4 col-lg-3 col-xl-2">
              <ul>
                  <li><i className="fas fa-search"></i></li>
                  <li><i className="fas fa-comment-dots"></i></li>
                  <li><i className="fas fa-tv"></i></li>
                  <li><i className="fas fa-bell"></i></li>
              </ul>
          </div>
          <div className="text-right">
              <ul>
                  <li><i className="fas fa-portrait"></i></li>
                  <li><i className="fas fa-cog"></i></li>
                  <li><i className="fas fa-sign-out-alt"></i></li>
              </ul>
          </div>
      </nav>
  </header>
    );
  }
}

export default Header;
