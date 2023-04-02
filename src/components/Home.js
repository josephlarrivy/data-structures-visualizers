import React from "react";
import NavBar from "../NavBar";
import { Link, Route, Routes } from 'react-router-dom';



const Home = () => {

  return (
    <div className="home">
      <h1>Home</h1>
      <h1>
        <Link to={`/linkedlist`}>LinkedList</Link>
      </h1>
    </div>
  )
}

export default Home;