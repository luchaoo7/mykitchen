import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Container from 'react-bootstrap/Container';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const NavBar = (props) => {
  
  const public_image = process.env.PUBLIC_URL;
  const logo = 'logo.jpg';
  
  const style = {
        width: "80px",
        height: "34px",
    }

    return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <a className="navbar-brand" href="/">
            <img src={`${public_image}/images/${logo}`} className="img-responsive" style={style}  alt=""/>
          </a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#top"><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
          <li><a href="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart {props.amount}</a></li>
          <li> <LoginButton /> </li>
          <li> <LogoutButton /> </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar;