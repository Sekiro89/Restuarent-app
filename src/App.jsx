import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import { Routes , Route , Navigate } from 'react-router-dom';
//import Header from './components/Header';
//import BookingForm from './components/BookingForm';
import Main from './components/Main.jsx';
import ResMenu from './components/ResMenu.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';


function App() {
  
  return (
    <div>
        <Nav />
        <main className="main-component">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/resmenu" element={<ResMenu />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </main>
    </div>
  )
}

export default App;
