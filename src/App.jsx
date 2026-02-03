import React from 'react'
import './App.css'
import Welcome from './pages/Welcome';
import Account from './pages/Account';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Welcome /> } />
      <Route path="/account" element={ <Account /> } />
      <Route path="signup" element={ <Signup /> } />
      <Route path="login" element={ <Login /> } />
    </Routes>
  )
}

export default App
