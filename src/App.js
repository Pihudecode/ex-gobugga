import React, { Component } from 'react';
import Header from './component/Header';
import SideNav from './component/SideNav';
import MainWrapper from './component/MainWrapper';

class App extends Component {

  render() {
    return (
      <main>
        <Header />
        <div className="row no-gutters">
          <SideNav />
          <MainWrapper />
        </div>
      </main>
    );
  }

}

export default App;
