import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';


import Home from "./components/Home";
import LinkedListDisplay from './components/LinkedList/LinkedListDisplay';
import Stack from "./components/Stack2/Stack2";
import QueueComponent from "./components/Queue/Queue";


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
        <Route exact path="/stack"
          element={
            <Stack />}
        />
        <Route exact path="/queue"
          element={
            <QueueComponent />}
        />
      </Routes>

    </>
  )
}

export default ApplicationRoutes;