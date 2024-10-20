import React from 'react';
import Login from './Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/FeatureSection';
import Solutions from './components/Solutions';
import Questions from './components/Questions';
import Support from './components/Support';
import Call from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Solutions />
      <Support />
      <Call />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
