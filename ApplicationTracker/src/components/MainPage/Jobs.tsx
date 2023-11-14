import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Link as RouterLink } from 'react-router-dom'
import JobContainer from "../Containers/JobContainer";
import JobInputForm from "./JobInputForm";
import Navbar from "../Navbar";


const Home = () => {

  return(
    <div>
      <Navbar />
      Jobs Page
      <RouterLink to='/inputform'>Input New Job</RouterLink>
    </div>
  )

}

export default Home;