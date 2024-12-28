import TitleForBranch from '../components/TitleForBranch';
import IconBatch from '../components/IconBatch';
import BatchWrapper from '../components/BatchWrapper';
import Title from '../components/Title';

import { 
    FaDocker, FaWindows, FaLinux, FaReact, FaHtml5, FaCss3Alt, FaNpm, FaGitAlt 
} from "react-icons/fa";
import { SiVirtualbox, SiAstro, SiGnubash } from "react-icons/si";
import { GrVmware } from "react-icons/gr";
import { RiTailwindCssFill, RiJavaLine, RiPhpLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { TbJson } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";

// Configuración de habilidades
const skillsData = [
    {
        category: "Sistemas",
        icons: [
            { Icon: FaWindows },
            { Icon: FaDocker },
            { Icon: FaLinux },
            { Icon: SiVirtualbox },
            { Icon: GrVmware },
        ],
    },
    {
        category: "Desarrollo Web",
        icons: [
            { Icon: FaReact },
            { Icon: SiAstro },
            { Icon: FaHtml5 },
            { Icon: FaCss3Alt },
            { Icon: IoLogoJavascript },
            { Icon: RiTailwindCssFill },
            { Icon: RiPhpLine },
            { Icon: BsFiletypeXml },
            { Icon: PiFileSqlFill },
        ],
    },
    {
        category: "Programación",
        icons: [
            { Icon: AiOutlinePython },
            { Icon: SiGnubash },
            { Icon: RiJavaLine },
        ],
    },
    {
        category: "Tecnologías",
        icons: [
            { Icon: TbJson },
            { Icon: FaNpm },
            { Icon: FaGitAlt },
        ],
    },
];

export const Skills = ({className}) => {
    return (
        <section id="skills" className={`${className}`}>
            <Title
                id="Titulo_Habilidades"
                title="Habilidades"
                icon='<svg width="24px" height="24px" class="fill-text_primary" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M5,19H1c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v7C6,18.6,5.6,19,5,19z M2,17h2v-5H2V17z"/><path d="M11,6H9C8.4,6,8,6.4,8,7v11c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V7C12,6.4,11.6,6,11,6z"/><path d="M19,19h-4c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h4c0.6,0,1-0.4,1-1v16C20,18.6,19.6,19,19,19z M16,17h2V3h-2V17z"/></svg>'
                className="fade-in-delayed_rapid"
            />
            <div className='section-class bg-[#18181883] p-3 rounded-lg mt-6 border border-white/10'>
                {skillsData.map((skillCategory, index) => (
                    <BatchWrapper key={index}>
                        <TitleForBranch title={skillCategory.category} />
                        <IconBatch>
                            {skillCategory.icons.map((icon, i) => (
                                <li key={i}>
                                    <icon.Icon size={32} />
                                </li>
                            ))}
                        </IconBatch>
                    </BatchWrapper>
                ))}
            </div>
        </section>
    );
};
