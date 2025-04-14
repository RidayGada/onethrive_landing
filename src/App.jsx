import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import video from './assets/video.mp4';

const App = () => {
  return (
    <div id="app-root">
      <video autoPlay loop muted className="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      <Nav />
      <div id="main">
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;


