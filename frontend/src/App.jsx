import { useState } from 'react'
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignUpForm from './Pages/SignUp';
import Unauthorized_user from './Pages/UnauthorizesAccess';
import LoginForm from './Pages/Login';

function App() {


  return (
    <>

      <Routes>
        {/* Public Routes (Available to Everyone) */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />


        {/* Unauthorized Route */}
        <Route path="/*" element={<Unauthorized_user />} />



      </Routes>
    </>
  )
}

export default App
