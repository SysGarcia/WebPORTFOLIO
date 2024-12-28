import Title from '../components/Title';
import TimeFrame from '../components/TimeFrame';

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

export const Studies = ({className}) => {
    
    return (
        <section id="studies" className={`${className}`}>
            <Title
            id="Titulo_Formacion"
            title="Formación"
            icon='<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="14" r="4" class="stroke-text_primary" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle class="stroke-text_primary" cx="18" cy="14" r="4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M10 14L10.2111 13.8944C11.3373 13.3314 12.6627 13.3314 13.7889 13.8944L14 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M19 6L21.8383 12.6227C21.945 12.8716 22 13.1397 22 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6L2.16171 12.6227C2.05502 12.8716 2 13.1397 2 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            className="fade-in-delayed_rapid"
            />
            <TimeFrame items={Formacion} className="fade-in-delayed" />
      </section>
    );
};

