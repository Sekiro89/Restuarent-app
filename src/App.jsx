import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx'; // ✅ new combined component
import ResMenu from './components/ResMenu.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Nav />
      <main className="main-component">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} /> {/* ✅ updated route */}
          <Route path="/resmenu" element={<ResMenu />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
