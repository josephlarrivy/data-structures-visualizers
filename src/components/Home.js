import React from "react";
import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {

  return (
    <div className="home-container">
      <h1>ComputerScienceVisualizer.com</h1>
      <div className="home">
        <Link to={`/linkedlist`} className="square linked-list">
          <h1 className="title">LinkedList</h1>
        </Link>
        <Link to={`/stack`} className="square stack">
          <h1 className="title">Stack</h1>
        </Link>
        <Link to={`/binarytree`} className="square binarytree">
          <h1 className="title">Binary Tree</h1>
        </Link>
      </div>
    </div>
  )
}

export default Home;