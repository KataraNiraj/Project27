// App.js
import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <Main />
      <Footer />
    </>
  );
};

export default App;

