import './App.css';
import React from 'react';
import Profile from './components/Profile'
import Prop from './components/Prop'
import Footer from './components/Footer'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';

function App() {
  return(
    <div>
    <Profile />
    <Prop />
    <Footer />
    </div>
  )
}



export default App;