import React, { ReactElement } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';
import '../App.css';


interface Props {}

// eslint-disable-next-line no-empty-pattern
function Home({}: Props): ReactElement {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
