import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import Login from './components/login.component';
import Signup from './components/signup.component';
import Search from './components/search.component';
import Result from './components/result.component';
import Home from './components/home.component';
import Prediction from './components/prediction.component';





class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              <h3>App by team The Alphas </h3>
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-Link" >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/login"} className="nav-Link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/signup"} className="nav-Link">
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/search"} className="nav-Link">
                    Search
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/result"} className="nav-Link">
                    Result
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/prediction"} className="nav-Link">
                    See predicted prices
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <h2>Welcome to Restaurant Menu Generator App</h2>
          <br />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/prediction" component={Prediction} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
