export const ProjectPreview = ({
    title = 'Título del Proyecto',
    image = 'https://via.placeholder.com/2672x450',
    video = null, // Añadimos la propiedad video, que por defecto será null
    description = 'Descripción del proyecto...',
    githubLink = '#',
}) => {
    return (
        <a href={githubLink} className="relative block">
            <div className="relative h-[350px] sm:h-[450px]">
                {/* Si hay un video, lo mostramos en lugar de la imagen */}
                {video ? (
                    <video
                        src={video}
                        alt="Project video"
                        className=" inset-0 h-full w-full object-cover opacity-100 rounded-lg"
                        autoPlay
                        loop
                        muted
                    />
                ) : (
                    <img
                        src={image}
                        alt="Project preview"
                        className=" inset-0 h-full w-full object-cover opacity-100 rounded-lg"
                    />
                )}
                {/* Aquí solo mostramos la imagen si no hay video */}
                {!video && (
                    <img
                        src={image}
                        alt="Project preview"
                        className=" inset-0 h-full w-full object-cover opacity-0 rounded-lg"
                    />
                )}
            </div>

            <div className="absolute justify-end inset-0 flex flex-col items-end sm:items-start sm:justify-between bg-gradient-to-t from-black via-transparent to-black rounded-lg h-full">
    <div className="flex flex-col sm:justify-between bg-[#07070780] w-full h-1/3 sm:w-1/2 sm:h-full p-6 gap-y-2">
        <h3 className="text-xl font-medium text-button_secondary shadow-[4px_4px_8px_0px_rgba(0,0,0,0.3)]">
            {title}
        </h3>

        <p className="hidden sm:flex text-pretty text-sm text-text_secondary flex-grow">
            {description}
        </p>

        <span className="w-12 h-12 inline-flex items-center justify-center rounded-lg bg-button_secondary hover:bg-button_primary transition duration-300 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-text_primary" viewBox="0 0 24 24">
                <path d="m0 0h24v24h-24z" fill="#fff" opacity="0"></path>
                <path d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" className="w-8 h-8 fill-text_primary"></path>
            </svg>
        </span>

    </div>
</div>

        </a>
    );
};
