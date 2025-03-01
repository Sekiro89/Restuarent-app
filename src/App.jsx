import React from 'react';
import './App.css';
import Nav from "./components/Nav";
//import Header from './components/Header';
//import BookingForm from './components/BookingForm';
import Main from './components/Main.jsx';
import ResMenu from './components/ResMenu.jsx';
import Footer from './components/Footer.jsx';



function App() {
  
  return (
  
    <>
   <Nav />
   <Main />
   <ResMenu />
   <Footer />
   </>
  )
}

export default App;
