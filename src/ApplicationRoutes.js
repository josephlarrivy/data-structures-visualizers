import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';


import Home from "./components/Home";
import LinkedListDisplay from './components/LinkedList/LinkedListDisplay';



const ApplicationRoutes = () => {



  return (
    <>
      <Routes>
        <Route exact path="/"
          element={
            <Home />} 
        />
        <Route exact path="/linkedlist"
          element={
            <LinkedListDisplay />}
        />
      </Routes>

    </>
  )
}

export default ApplicationRoutes;