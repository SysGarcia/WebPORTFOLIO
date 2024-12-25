import Pill from "./Pill";
import '../index.css'
import IconButton from "./IconButton";
import cvFile from "../Assets/García_Durán_Isaac_CV.pdf";
import Isaac_img from "../Assets/IsaacGarcia.jpg"

const HeroSection = ({id, className}) => {
    return (
        <div className={`mt-48 ${className}`} id={id}>
            <div class="flex flex-col lg:flex-row gap-x-4 mb-2 lg:mb-4">
                <div class="flex">
                    <img
                        alt="Foto Isaac García"
                        src={Isaac_img}
                        class="rounded-full w-20 mb-2 lg:mb-0 lg:w-28 border-2 border-text_primary"
                    ></img>
                </div>
                <div class="flex justify-end mb-1 flex-col ">
                    <h1 className="flex justify-start text-4xl sm:text-5xl font-extrabold mb-2 lg:mb-1 title">
                        Isaac García.
                    </h1>
                    <Pill />
                </div>
            </div>
            <p class="text-pretty text-xl font-semibold relative">
                <span class="text-gradient">Técnico en Administración de sistemas informáticos en red</span>.
                De Madrid, España. Especializado en convertir ideas a la realidad.
            </p>
            <div class="flex flex-row mt-3 gap-x-3">
                <IconButton text='Cv' id="CV_Button" site={cvFile} downloadable={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-text_primary" viewBox="0 0 448 512"><path d="m433.941 65.941-51.882-51.882a48 48 0 0 0 -33.941-14.059h-172.118c-26.51 0-48 21.49-48 48v48h-80c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48v-268.118a48 48 0 0 0 -14.059-33.941zm-167.941 398.059h-212a6 6 0 0 1 -6-6v-308a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1 -6 6zm128-96h-212a6 6 0 0 1 -6-6v-308a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1 -6 6zm6-256h-64v-64h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243z"/></svg>                
                </IconButton>
                
                <IconButton text='Github' color='bg-[#2b2b2b]' site="https://github.com/SysGarcia" downloadable={false}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-text_primary" viewBox="0 0 24 24"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" class="w-8 h-8 fill-text_primary"/></svg>               
                </IconButton>

                <IconButton text='LinkedIn' color='bg-[#0072b1]' site="https://www.linkedin.com/in/isaac-garc%C3%ADa-dur%C3%A1n-379121310/" downloadable={false}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-text_primary" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="m9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904h3.771v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0h3.775v12.139h-3.775z"/></svg>                
                </IconButton>
                </div>
        </div>
    );
};

export default HeroSection;
