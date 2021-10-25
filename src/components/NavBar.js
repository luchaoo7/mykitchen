import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Container from 'react-bootstrap/Container';

const NavBar = () => {

    return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <a className="navbar-brand" href="#top">Logo</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#top">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="#top">Contact</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#top"><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
          <li><a href="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar;