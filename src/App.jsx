import React from 'react';
import '../public/styles/App.css';
import Navbar from './components/Navbar';
import SiteLoader from './components/Siteloader';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';

function App() {
  
  return (

    <>
      
      <SiteLoader />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Services />
          
    </>

  );

}

export default App;