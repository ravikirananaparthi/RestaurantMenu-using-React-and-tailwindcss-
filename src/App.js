import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Receipe from './components/Receipe';
function App(props) {
  return (
    <div>
      <Navbar id="nav"/>
      <Hero/>
      <Cards/>
      <Receipe/>
    </div>
  );
}

export default App;