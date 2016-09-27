import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Shop <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Alerts</a></li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
              </div>
            </form>
            <a className="navbar-brand" href="#">DASHWINK</a>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Style Game <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Editor's Blog</a></li>
              <li><a href="#">Jane Doe</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}