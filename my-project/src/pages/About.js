import React from 'react';
import TopBar from '../components/HeaderComponents/TopBar'; // Asegúrate de que la ruta sea correcta
import HeroSection from '../components/HeroSection';

function About() {
  // Establece el valor de current_page según la ruta activa
  const current_page = '/about';

  return (
    <div>
      <TopBar current_page={current_page} /> 
      <HeroSection />
    </div>
  );
}

export default About;