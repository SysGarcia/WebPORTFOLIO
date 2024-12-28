import { ProjectPreview } from "./ProjectPreview";
export const Projects = ({className }) => {

    return (
        <section id="projects" className={`${className}`}>
            <ProjectPreview/>
            <ProjectPreview/>
            <ProjectPreview/>
        </section>
    );
};
