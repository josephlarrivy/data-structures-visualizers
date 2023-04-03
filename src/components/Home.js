import React from "react";
import NavBar from "../NavBar";
import { Link, Route, Routes } from 'react-router-dom';

import './Home.css'

const Home = () => {

  return (
    <div className="home-container">
      <h1>ComputerScienceVisualizer.com</h1>
      <div className="home">
        <div className="square linked-list">
          <h1 className="title">
            <Link to={`/linkedlist`}>LinkedList</Link>
          </h1>
        </div>
        <div className="square stack">
          <h1 className="title">
            <Link to={`/stack`}>Stack</Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
