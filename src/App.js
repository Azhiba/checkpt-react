import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
// import Gallery from './components/gallery';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     
     
   <Navbar/>
   <Contact/>
   <About/>
   <Home/>
   {/* <Gallery/> */}

   </>
  );
}

export default App
