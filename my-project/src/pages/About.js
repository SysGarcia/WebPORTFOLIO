import React from 'react';
import TopBar from '../components/HeaderComponents/TopBar'; // Asegúrate de que la ruta sea correcta
import HeroSection from '../components/HeroSection';
import Title from '../components/Title';
import TimeFrame from '../components/TimeFrame';

const Experiencia = [
  {
    dateRange: "1 Julio 2024 - Actualidad",
    title: "Clases de Programación.",
    link: "https://www.tusclases.com/",
    description: "Clases particulares de programación, especializadas en pseudocódigo, diagramas de flujo, C/C++ y, el curso de Desarrollo de Aplicaciones Multiplataforma (DAM), enfocadas en Java, Bases de Datos y lenguajes de marcas.",
    work: true,
  },

  {
    dateRange: "1 Julio 2024 - 30 Agosto 2024",
    title: "Conserjería en una finca.",
    description: "Vigilancia y preservación de una finca de edificios ubicada en la calle: Avenida Ocho de Marzo, 9, Fuenlabrada. Entre las principales responsabilidades se incluyen la seguridad y el control de accesos al edificio, mantenimiento general, supervisión del estado de las instalaciones, y limpieza de áreas comunes. También se realizarán tareas como el cambio de cerraduras, reparaciones menores, control de sistemas de iluminación, y monitoreo de equipos de seguridad (cámaras, alarmas).",
    work: true,
  },
  {
    dateRange: "5 Junio 2024 - 30 Agosto 2024",
    title: "Mantenimiento de Piscinas.",
    link: "https://aquavic.es/",
    description: "Mantenimiento básico de piscinas: limpieza, control de cloro y pH, y pequeñas reparaciones. Servicio en piscinas distribuidas en Madrid, en particular para 5 piscinas situadas en Griñón, Humanes y Fuenlabrada.",
    work: true,
  },
];


const Formacion = [

  {
    dateRange: "08 Septiembre 2023 - Actualidad",
    title: "Grado en Administración de sistemas informáticos en red.",
    description: "Cursando el Grado Superior en Administración de Sistemas Informáticos en Red en la siguiente dirección: Calle Móstoles, 64, 28941 Fuenlabrada, Madrid.",
    study: true,
  },

  {
    dateRange: "08 septiembre 2021 - 21	junio 2023",
    title: "Bachillerato de Ciencias y Tecnología.",
    description: "Bachillerato completado en el instituto Carpe Diem ubicado en: Av. de Nuevo Versalles, 6, 28942 Fuenlabrada, Madrid ",
    study: true,
  },
]

function About() {
  // Establece el valor de current_page según la ruta activa
  const current_page = '/about';

  return (
    <main>
    <TopBar current_page={current_page} /> 
      <div class="w-full flex flex-col text-text_primary mx-auto max-w-5xl">
        <div class="mx-6">
          <HeroSection />
          <Title title="Experiencia laboral" icon='<svg class="w-6 h-6 fill-text_primary sm:w-7 sm:h-7 flex-shrink-0 workicon_dark" id="workicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-j7pv25f6=""><path d="m6.314 18.022 5 4.707a1 1 0 0 0 1.372 0l5-4.707a1 1 0 0 0 .28-.985L15.091 6.212 17.8 2.6A1 1 0 0 0 17 1H7a1 1 0 0 0-.8 1.6l2.709 3.612-2.875 10.825a1 1 0 0 0 .28.985zM15 3l-1.5 2h-3L9 3zm-4.231 4h2.462l2.649 9.975L12 20.627l-3.88-3.652z" data-astro-cid-j7pv25f6=""></path></svg>'/>
          <TimeFrame items={Experiencia} />
          <Title title="Formación" icon='<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="14" r="4" class="stroke-text_primary" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle class="stroke-text_primary" cx="18" cy="14" r="4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M10 14L10.2111 13.8944C11.3373 13.3314 12.6627 13.3314 13.7889 13.8944L14 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M19 6L21.8383 12.6227C21.945 12.8716 22 13.1397 22 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6L2.16171 12.6227C2.05502 12.8716 2 13.1397 2 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'/>
          <TimeFrame items={Formacion} />
        </div>
      </div>
    </main>
  );
}

export default About;