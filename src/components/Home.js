import React from "react";
import NavBar from "../NavBar";
import { Link, Route, Routes } from 'react-router-dom';

import './Home.css'

const Home = () => {

  return (
    <div className="home">
      <h1>Computer Science Visualizer</h1>
      <div className="square">
        <h1>
          <Link to={`/linkedlist`}>LinkedList</Link>
        </h1>
      </div>
    </div>
  )
}

export default Home;