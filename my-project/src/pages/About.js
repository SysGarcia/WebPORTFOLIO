import React from 'react';
import TopBar from '../components/HeaderComponents/TopBar';
import HeroSection from '../components/HeroSection';
import Title from '../components/Title';
import TimeFrame from '../components/TimeFrame';
import '../index.css'
import TitleForBranch from '../components/TitleForBranch';
import IconBatch from '../components/IconBatch';

const Experiencia = [
  {
    dateRange: "1 Julio 2024 - Actualidad",
    title: "Clases de Programación.",
    link: "https://www.tusclases.com/",
    description:
      "Clases particulares de programación, especializadas en pseudocódigo, diagramas de flujo, C/C++ y, el curso de Desarrollo de Aplicaciones Multiplataforma (DAM), enfocadas en Java, Bases de Datos y lenguajes de marcas.",
    work: true,
  },
  {
    dateRange: "1 Julio 2024 - 30 Agosto 2024",
    title: "Conserjería en una finca.",
    description:
      "Vigilancia y preservación de una finca de edificios ubicada en la calle: Avenida Ocho de Marzo, 9, Fuenlabrada. Entre las principales responsabilidades se incluyen la seguridad y el control de accesos al edificio, mantenimiento general, supervisión del estado de las instalaciones, y limpieza de áreas comunes. También se realizarán tareas como el cambio de cerraduras, reparaciones menores, control de sistemas de iluminación, y monitoreo de equipos de seguridad (cámaras, alarmas).",
    work: true,
  },
  {
    dateRange: "5 Junio 2024 - 30 Agosto 2024",
    title: "Mantenimiento de Piscinas.",
    link: "https://aquavic.es/",
    description:
      "Mantenimiento básico de piscinas: limpieza, control de cloro y pH, y pequeñas reparaciones. Servicio en piscinas distribuidas en Madrid, en particular para 5 piscinas situadas en Griñón, Humanes y Fuenlabrada.",
    work: true,
  },
];

const Formacion = [
  {
    dateRange: "08 Septiembre 2023 - Actualidad",
    title: "Grado en Administración de sistemas informáticos en red.",
    link: "https://site.educa.madrid.org/ies.jovellanos.fuenlabrada/",
    description:
      "Cursando el Grado Superior en Administración de Sistemas Informáticos en Red en la siguiente dirección: Calle Móstoles, 64, 28941 Fuenlabrada, Madrid.",
    study: true,
  },
  {
    dateRange: "08 septiembre 2021 - 21 junio 2023",
    title: "Bachillerato de Ciencias y Tecnología.",
    link: "https://site.educa.madrid.org/ies.carpediem.fuenlabrada/",
    description:
      "Bachillerato completado en el instituto Carpe Diem ubicado en: Av. de Nuevo Versalles, 6, 28942 Fuenlabrada, Madrid.",
    study: true,
  },
];

function About() {
  const current_page = '/about';

  return (
    <main>
      <section id="about">
      <TopBar current_page={current_page} />

      </section>
      <div className="w-full flex flex-col text-text_primary mx-auto max-w-5xl">
        <div className="mx-6">
            <HeroSection id="Titulo" className="fade-in" />
          <section id="work">
            <Title
              id="Titulo_Experiencia"
              title="Experiencia laboral"
              icon='<svg class="w-6 h-6 fill-text_primary sm:w-7 sm:h-7 flex-shrink-0 workicon_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.314 18.022l5 4.707a1 1 0 0 0 1.372 0l5-4.707a1 1 0 0 0 .28-.985L15.091 6.212 17.8 2.6A1 1 0 0 0 17 1H7a1 1 0 0 0-.8 1.6l2.709 3.612-2.875 10.825a1 1 0 0 0 .28.985zM15 3l-1.5 2h-3L9 3zm-4.231 4h2.462l2.649 9.975L12 20.627l-3.88-3.652z"></path></svg>'
              className="fade-in-delayed_rapid"
            />
            <TimeFrame items={Experiencia} className="fade-in-delayed" />
          </section>
          <div className="mb-16"></div>
          <section id="studies">
            <Title
              id="Titulo_Formacion"
              title="Formación"
              icon='<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="14" r="4" class="stroke-text_primary" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle class="stroke-text_primary" cx="18" cy="14" r="4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M10 14L10.2111 13.8944C11.3373 13.3314 12.6627 13.3314 13.7889 13.8944L14 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M19 6L21.8383 12.6227C21.945 12.8716 22 13.1397 22 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6L2.16171 12.6227C2.05502 12.8716 2 13.1397 2 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
              className="fade-in-delayed_rapid"
            />
          </section>
          <section id="skills">
            <TimeFrame items={Formacion} className="fade-in-delayed" />
            <Title
              id="Titulo_Habilidades"
              title="Habilidades"
              icon='<svg width="24px" height="24px" class="fill-text_primary" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M5,19H1c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v7C6,18.6,5.6,19,5,19z M2,17h2v-5H2V17z"/><path d="M11,6H9C8.4,6,8,6.4,8,7v11c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V7C12,6.4,11.6,6,11,6z"/><path d="M19,19h-4c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v16C20,18.6,19.6,19,19,19z M16,17h2V3h-2V17z"/></svg>'
              className="fade-in-delayed_rapid"
            />
            <TitleForBranch title="Operative Systems"/>
            <IconBatch>
              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4875 4875"><path fill="#0078d4" d="M0 0h2311v2310H0zm2564 0h2311v2310H2564zM0 2564h2311v2311H0zm2564 0h2311v2311H2564"/></svg></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="-.557 117.607 598.543 423.631" width="28px"><g fill="#0091e2"><path d="m592.162 277.804c-1.664-1.37-16.642-12.597-48.815-12.597-8.321 0-16.92.822-25.24 2.191-6.102-41.898-41.327-62.162-42.714-63.257l-8.598-4.93-5.547 7.942c-6.934 10.68-12.204 22.729-15.255 35.052-5.824 23.824-2.219 46.279 9.985 65.447-14.7 8.216-38.553 10.133-43.545 10.406h-393.853c-10.262 0-18.583 8.216-18.583 18.348-.554 33.956 5.27 67.912 17.197 99.951 13.59 35.052 33.838 61.067 59.91 76.95 29.4 17.799 77.383 27.931 131.468 27.931 24.408 0 48.815-2.19 72.946-6.572 33.56-6.025 65.734-17.526 95.412-34.23a260.485 260.485 0 0 0 64.902-52.577c31.342-34.778 49.925-73.663 63.515-108.167h5.547c34.116 0 55.195-13.418 66.844-24.92 7.766-7.12 13.59-15.882 17.751-25.74l2.497-7.12z"/><path d="m55.193 306.83h52.698c2.497 0 4.716-1.916 4.716-4.654v-46.553c0-2.465-1.942-4.655-4.716-4.655h-52.698c-2.496 0-4.715 1.916-4.715 4.655v46.553c.277 2.738 2.219 4.655 4.715 4.655zm72.668 0h52.699c2.496 0 4.715-1.916 4.715-4.654v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.7c-2.496 0-4.715 1.916-4.715 4.655v46.553c.278 2.738 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 1.942 4.655 4.715 4.655zm72.946 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 2.219 4.655 4.715 4.655zm-147-66.543h52.698c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c.278 2.464 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 1.942 4.655 4.715 4.655m72.946 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m0-66.817h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m73.5 133.36h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.941-4.655-4.715-4.655h-52.698c-2.497 0-4.716 1.916-4.716 4.655v46.553c.278 2.738 2.22 4.655 4.716 4.655"/></g></svg></li>

            </IconBatch>
            <TitleForBranch title="Frontend"/>
            <TitleForBranch title="Backend"/>
            <TitleForBranch title="Programming"/>
            <TitleForBranch title="Technologies"/>
            <TitleForBranch title="Others"/>
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;
