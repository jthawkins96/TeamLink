import React from 'react';
import MobileNav from './components/Navbar/MobileNav';
import MainNav from './components/Navbar/MainNav';
import Home from './components/Home/Home';
import FindProjects from './components/FindProjects/FindProjects';
import MyProjects from './components/MyProjects/MyProjects';
import Notifications from './components/Notifications/Notifications';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <div id="root-container" className="home-bg">
      <div id="navbar-container">
        <MainNav />
        <MobileNav />
      </div>
      <div id="content-container" className="container pt-3 d-flex justify-content-center flex-column">
        <Home />
        {/* <FindProjects /> */}
        {/* <MyProjects />  */}
        {/* <Notifications /> */}
        {/* <MyProfile /> */}
      </div>
    </div>
  );
}

export default App;
