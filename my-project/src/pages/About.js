import React from 'react';
import TopBar from '../components/HeaderComponents/TopBar'; // Asegúrate de que la ruta sea correcta
import HeroSection from '../components/HeroSection';
import Title from '../components/Title';

function About() {
  // Establece el valor de current_page según la ruta activa
  const current_page = '/about';

  return (
    <main>
    <TopBar current_page={current_page} /> 
      <div class="w-full flex flex-col text-text_primary mx-auto max-w-4xl">
        <div class="mx-6">
          <HeroSection />
          <Title title="Experiencia laboral y Formación." icon='<svg class="w-6 h-6 fill-text_primary sm:w-7 sm:h-7 flex-shrink-0 workicon_dark" id="workicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-j7pv25f6=""><path d="m6.314 18.022 5 4.707a1 1 0 0 0 1.372 0l5-4.707a1 1 0 0 0 .28-.985L15.091 6.212 17.8 2.6A1 1 0 0 0 17 1H7a1 1 0 0 0-.8 1.6l2.709 3.612-2.875 10.825a1 1 0 0 0 .28.985zM15 3l-1.5 2h-3L9 3zm-4.231 4h2.462l2.649 9.975L12 20.627l-3.88-3.652z" data-astro-cid-j7pv25f6=""></path></svg>'/>
          </div>
      </div>
    </main>
  );
}

export default About;