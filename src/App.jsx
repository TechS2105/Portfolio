import React from 'react';
import '../public/styles/App.css';
import Navbar from './components/Navbar';
import SiteLoader from './components/Siteloader';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';

function App() {
  
  return (

    <>
      
      <SiteLoader />
      <Navbar />
      <Home />
      <About />
      <Education />
          
    </>

  );

}

export default App;