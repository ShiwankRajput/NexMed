import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Features from './Pages/Features/Features';
import HowItWorks from './Pages/HowItWorks/Works';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import LoginSignUp from './Pages/LoginSignUp/LoginSignUp';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/howItWorks" element={<HowItWorks/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/loginSignUp" element={<LoginSignUp/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;