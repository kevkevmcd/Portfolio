import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
