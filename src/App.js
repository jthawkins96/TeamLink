import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.min.css';

import MobileNav from './components/Navbar/MobileNav';
import MainNav from './components/Navbar/MainNav';
import Home from './containers/Home/Home';
import FindProjects from './containers/FindProjects/FindProjects';
import MyProjects from './containers/MyProjects/MyProjects';
import Notifications from './containers/Notifications/Notifications';
import MyProfile from './containers/MyProfile/MyProfile';
import checkCookieForUser from './utility/checkCookieForUser'


const App = props => {

  useEffect(() => {
    checkCookieForUser(props);
  }, [])

  useEffect(() => {
    const pathName = props.location.pathname === '/' ? 'home' : props.location.pathname.replace('/', '')
    props.setBgClass(`${pathName}-bg`)
  }, [props.location.pathname])

  return (
    <div id="root-container" className={props.bgClass}>
      <div id="navbar-container">
        <MainNav isSignedIn={props.isSignedIn} />
        <MobileNav isSignedIn={props.isSignedIn} />
      </div>
      <div id="content-container" className="container pt-3 d-flex flex-column">
        <Switch>
          <Route path="/" exact component={Home} />
          {props.isSignedIn ? null : <Redirect to="/" />}
          <Route path="/find-projects" exact component={FindProjects} />
          <Route path="/my-projects" exact component={MyProjects} />
          <Route path="/notifications" exact component={Notifications} />
          <Route path="/my-profile" exact component={MyProfile} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    bgClass: state.bgClass.bgClass
  }
}

const mapActionToProps = dispatch => {
  return {
    setUser: (username) => dispatch({ type: 'SET_USERNAME', value: username }),
    setBgClass: (bgClass) => dispatch({ type: 'CHANGE_BACKGROUND', value: bgClass })
  }
}

export default connect(mapStateToProps, mapActionToProps)(withRouter(App));
