import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import MobileNav from './components/Navbar/MobileNav';
import MainNav from './components/Navbar/MainNav';
import Home from './containers/Home/Home';
import FindProjects from './containers/FindProjects/FindProjects';
import MyProjects from './containers/MyProjects/MyProjects';
import Notifications from './containers/Notifications/Notifications';
import MyProfile from './containers/MyProfile/MyProfile';

function App() {
  return (
    <BrowserRouter>
    <div id="root-container" className="home-bg">
      <div id="navbar-container">
        <MainNav />
        <MobileNav />
      </div>
      <div id="content-container" className="container pt-3 d-flex justify-content-center flex-column">
        <Route path="/" exact component={Home}/>
        <Route path="/find-projects" exact component={FindProjects}/>
        <Route path="/my-projects" exact component={MyProjects }/>
        <Route path="/notifications" exact component={Notifications}/>
        <Route path="/my-profile" exact component={MyProfile}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
