import React from 'react';
import '../public/styles/App.css';
import Navbar from './components/Navbar';
// import SiteLoader from './components/Siteloader';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  
  return (

    <>
      
      {/* <SiteLoader /> */}
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
          
    </>

  );

}

export default App;