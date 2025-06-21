import React, {useEffect} from 'react';
import '../public/styles/App.css';
import Navbar from './components/Navbar';
import ResponsiveNav from './responsive_components/Responsivenav';
import SiteLoader from './components/Siteloader';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
  
    const handelRightClick = (e) => {
    
      e.preventDefault();   
      
    }

    document.addEventListener('contextmenu', handelRightClick);
  
  }, [])
  
  return (

    <>
      
      <SiteLoader />
      <Navbar />
      <ResponsiveNav />
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
          
    </>

  );

}

export default App;