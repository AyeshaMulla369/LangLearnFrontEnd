import React from 'react';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Footer from './Footer';
import { useAuth } from '../../context/AuthContext';

function Home() {

  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <>
      <HeroSection />
      {isAuthenticated &&<Cards/>}
      <Footer/>
    </>
    
  );
}

export default Home