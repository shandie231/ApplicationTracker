import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Link as RouterLink } from 'react-router-dom'
import Navbar from '../Navbar'

const Home = () => {

  return(
    <div>
      <Navbar/>
      Home Page
      <RouterLink to='/jobs'>Jobs</RouterLink>
    </div>
  )

}

export default Home;