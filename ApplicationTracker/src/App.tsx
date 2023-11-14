import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Link as RouterLink } from 'react-router-dom'
import Home from './components/MainPage/Home'
import Jobs from './components/MainPage/Jobs'
import JobInputForm from './components/MainPage/JobInputForm';
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/inputform' element={<JobInputForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;