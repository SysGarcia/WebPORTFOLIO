import { ProjectPreview } from "./ProjectPreview";

import Proyecto1Img from "../Assets/Proyecto1.png";
import Proyecto2Video from "../Assets/Proyecto2.mp4";
import Proyecto3Img from "../Assets/Proyecto3.png";
import Title from "./Title";
export const Projects = ({ className }) => {
    // Lista de proyectos con datos de ejemplo
    const projects = [
        {
            title: "Json Converter",
            image: Proyecto1Img, // Imagen importada
            video: null,  // Este proyecto tiene solo imagen
            description: "Una herramienta que permite convertir json extraído de la plataforma Instagram y convertirlo a texto plano para una lectura más llevadera.",
            githubLink: "https://github.com/project-one"
        },
        {
            title: "Web Bastardos",
            image: Proyecto3Img, // Imagen importada
            video: null, // Este proyecto tiene solo imagen
            description: "Web de la serie Bastardos de Samuel Fernández López.",
            githubLink: "https://github.com/project-three"
        },
        {
            title: "Este Portfolio!",
            image: null, // Este proyecto tiene solo video
            video: Proyecto2Video, // Video importado
            description: "Mi portfolio web donde comparto mis ideas y quién soy.",
            githubLink: "https://github.com/project-two"
        },

    ];
    return (
<section id="projects" className={`${className} flex flex-col `}>
        <Title
            id="Titulo_Proyectos"
            title="Proyectos"
            icon='<svg class="fill-text_primary" width="24px" height="24px" viewBox="0 -0.06 0.6 0.6" xmlns="http://www.w3.org/2000/svg"> <path d="M.382.002A.03.03 0 0 1 .4.043L.256.459C.25.475.233.484.218.478A.03.03 0 0 1 .2.437L.344.021C.35.005.367-.004.382.002m-.31.246L.178.36a.033.033 0 0 1 0 .045.03.03 0 0 1-.042 0L.009.27a.033.033 0 0 1 0-.045L.136.091a.03.03 0 0 1 .042 0 .033.033 0 0 1 0 .045zm.455 0L.421.136a.033.033 0 0 1 0-.045.03.03 0 0 1 .042 0L.59.225a.033.033 0 0 1 0 .045L.463.404a.03.03 0 0 1-.042 0 .033.033 0 0 1 0-.045z"/> </svg>'
            className="fade-in-delayed_rapid"
        />
        <div className="flex flex-wrap gap-6 mt-6">
        {projects.map((project, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 flex-grow" key={index}>
                <ProjectPreview
                    title={project.title}
                    image={project.image}
                    video={project.video}
                    description={project.description}
                    githubLink={project.githubLink}
                />
            </div>
        ))}
        </div>
    </section>



    );
};
