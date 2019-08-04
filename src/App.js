import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
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


class App extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
        const pathName = this.props.location.pathname === '/' ? 'home' : this.props.location.pathname.replace('/', '')
        this.props.setBgClass(`${pathName}-bg`)
    }
}
  render() {
    if (this.props.userSignedInFromCookie) {
      this.props.setUser(this.props.username);
    }

    return (
        <div id="root-container" className={this.props.bgClass}>
          <div id="navbar-container">
            <MainNav isSignedIn={this.props.isSignedIn} />
            <MobileNav isSignedIn={this.props.isSignedIn} />
          </div>
          <div id="content-container" className="container pt-3 d-flex flex-column">
            <Switch>
              <Route path="/" exact component={Home} />
              {this.props.isSignedIn ? null : <Redirect to="/" />}
              <Route path="/find-projects" exact component={FindProjects} />
              <Route path="/my-projects" exact component={MyProjects} />
              <Route path="/notifications" exact component={Notifications} />
              <Route path="/my-profile" exact component={MyProfile} />
            </Switch>
          </div>
        </div>
    );
  }
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
