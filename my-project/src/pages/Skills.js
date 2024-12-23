import React from 'react';
import TopBar from '../components/HeaderComponents/TopBar'; // Asegúrate de que la ruta sea correcta
import HeroSection from '../components/HeroSection';

function Skills() {
  // Establece el valor de current_page según la ruta activa
  const current_page = '/skills';

  return (
    <div>
      <TopBar current_page={current_page} />
      <HeroSection />
    </div>
  );
}

export default Skills;