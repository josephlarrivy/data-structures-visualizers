import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link, Route, Routes } from 'react-router-dom';

import './NavBar.css'


const NavBar = () => {

  return (
    <div className='NavBar'>
      <Navbar>
        <Nav >
          <NavItem >
            <NavLink to="/">ComputerScienceVisualizer.com</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )

}

export default NavBar;
