import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import MainSection from './Components/MainSection';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
