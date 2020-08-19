import React from 'react';
import Header from './component/Header';
import SideNav from './component/SideNav';
import MainWrapper from './component/MainWrapper';

function App() {
  return (
    <main>
      <Header />
      <div class="row no-gutters">
        <SideNav />
        <MainWrapper />
      </div>
    </main>
  );
}

export default App;
