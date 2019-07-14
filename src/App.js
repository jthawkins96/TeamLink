import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MobileNav from './components/Navbar/MobileNav';
import MainNav from './components/Navbar/MainNav';
import Home from './containers/Home/Home';
import FindProjects from './containers/FindProjects/FindProjects';
import MyProjects from './containers/MyProjects/MyProjects';
import Notifications from './containers/Notifications/Notifications';
import MyProfile from './containers/MyProfile/MyProfile';


 function App(props) {
  return (
    <BrowserRouter>
      <div id="root-container" className="home-bg">
        <div id="navbar-container">
          <MainNav isSignedIn = {props.isSignedIn} />
          <MobileNav isSignedIn = {props.isSignedIn} />
        </div>
        <div id="content-container" className="container pt-3 d-flex justify-content-center flex-column">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* { props.isSignedIn ? null : <Redirect to="/" /> } */}
            <Route path="/find-projects" exact component={FindProjects} />
            <Route path="/my-projects" exact component={MyProjects} />
            <Route path="/notifications" exact component={Notifications} />
            <Route path="/my-profile" exact component={MyProfile} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps)(App);
