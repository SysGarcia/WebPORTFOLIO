import React from 'react';
import TopBar from '../components/HeaderComponents/TopBar'; // Asegúrate de que la ruta sea correcta
import HeroSection from '../components/HeroSection';

function Contact() {
  // Establece el valor de current_page según la ruta activa
  const current_page = '/contact';

  return (
    <div>
      <TopBar current_page={current_page} /> 
    </div>
  );
}

export default Contact;