import Title from '../components/Title';
import TimeFrame from '../components/TimeFrame';

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

export const Work = ({className}) => {
    return (
        <section id="work" class={`${className}`}>
            <Title
            id="Titulo_Experiencia"
            title="Experiencia laboral"
            icon='<svg class="w-6 h-6 fill-text_primary sm:w-7 sm:h-7 flex-shrink-0 workicon_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.314 18.022l5 4.707a1 1 0 0 0 1.372 0l5-4.707a1 1 0 0 0 .28-.985L15.091 6.212 17.8 2.6A1 1 0 0 0 17 1H7a1 1 0 0 0-.8 1.6l2.709 3.612-2.875 10.825a1 1 0 0 0 .28.985zM15 3l-1.5 2h-3L9 3zm-4.231 4h2.462l2.649 9.975L12 20.627l-3.88-3.652z"></path></svg>'
            className='fade-in-delayed_rapid'
            />
            <TimeFrame items={Experiencia} className="fade-in-delayed" />
        </section>
    );
};

    