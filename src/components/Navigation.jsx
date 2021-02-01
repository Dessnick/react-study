import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Search from './Search';

function Navigation({ searchResult }) {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
          <Search searchResult={searchResult} />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
