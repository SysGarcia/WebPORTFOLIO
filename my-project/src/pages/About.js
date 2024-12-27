import React from 'react';
import TopBar from '../components/HeaderComponents/TopBar';
import HeroSection from '../components/HeroSection';
import Title from '../components/Title';
import TimeFrame from '../components/TimeFrame';
import '../index.css'
import TitleForBranch from '../components/TitleForBranch';
import IconBatch from '../components/IconBatch';
import BatchWrapper from '../components/BatchWrapper';
import BlogHero from '../components/BlogHero'

import { FaDocker, FaWindows, FaLinux, FaReact, FaHtml5, FaCss3Alt, FaNpm, FaGitAlt } from "react-icons/fa";
import { SiVirtualbox, SiAstro, SiGnubash  } from "react-icons/si";
import { GrVmware } from "react-icons/gr";
import { RiTailwindCssFill,RiJavaLine, RiPhpLine   } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { TbJson } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";

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
              className="fade-in-delayed_rapid"/>
            <div className='bg-[#18181883] p-3 rounded-lg mt-5 border border-white/10 fade-in-delayed'>
              <BatchWrapper>
                <TitleForBranch title="Sistemas"/>
                  <IconBatch>
                    <li><FaWindows size={32} /></li>
                    <li><FaDocker size={32}/></li>
                    <li><FaLinux size={32}/></li>
                    <li><SiVirtualbox size={32}/></li>
                    <li><GrVmware size={32}/></li>
                  </IconBatch>
              </BatchWrapper>
              <BatchWrapper>
                <TitleForBranch title="Desarrollo Web"/>
                  <IconBatch>
                    <li><FaReact size={32}/></li>
                    <li><SiAstro size={32}/></li>
                    <li><FaHtml5 size={32}/></li>
                    <li><FaCss3Alt size={32}/></li>
                    <li><IoLogoJavascript size={32}/></li>
                    <li><RiTailwindCssFill size={32}/></li>
                    <li><RiPhpLine size={32}/></li>
                    <li><BsFiletypeXml size={32}/></li>
                    <li><PiFileSqlFill size={32}/></li>
                  </IconBatch>
                  </BatchWrapper>
              <BatchWrapper>
              <TitleForBranch title="Programación"/>
                <IconBatch>
                  <li><AiOutlinePython size={32}/></li>
                  <li><SiGnubash size={32}/></li>
                  <li><RiJavaLine size={32}/></li>
                </IconBatch>
              </BatchWrapper>
              <BatchWrapper>
              <TitleForBranch title="Tecnologías"/>
                <IconBatch>
                  <li><TbJson size={32}/></li>
                  <li><FaNpm size={32}/></li>
                  <li><FaGitAlt size={32}/></li>
                </IconBatch>
              </BatchWrapper>
            </div>
          </section>
          <section id="blog">
            <BlogHero/>
            </section>
        </div>
      </div>
    </main>
  );
}

export default About;
