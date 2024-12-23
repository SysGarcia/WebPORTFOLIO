const HeroSection = () => {
    return (
        <div className="w-full h-auto sm:h-24 flex flex-col text-[#f3f3f3] font-Poppins mx-auto max-w-7xl mt-20">
            <div class="mx-6">
                <div class="flex sm:justify-between items-center">
                    <div class="flex flex-col">
                        <h1 className="flex text-6xl font-extrabold">
                            Muy buenas!
                        </h1>
                        <div class="flex-col lg:flex-row flex justify-start lg:items-center gap-x-2">
                            <h2 className="flex text-xl font-semibold text-gray-200 leading-10">
                                Soy Isaac García Durán 
                            </h2>
                            <div class="space-x-4">
                                <span class="inline-flex items-center bg-yellow-300 rounded-full px-2 text-sm text-black py-1 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-1.5 text-black" viewBox="0 0 16 16" width="16" height="16">
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                    <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                                    </svg>
                                    Disponible para ofertas de trabajo
                                </span>
                            </div>
                        </div>
                    </div>
                    <img src="IsaacGarcia.jpg" class="w-20 h-20 rounded-full  border-1 flex items-center justify-center border-[1px] border-transparent bg-clip-border bg-gradient-to-r from-amber-200 to-yellow-300"></img>
                </div>
                <h2 class="mt-3 font-semibold text-gray-200">
                    <span class="bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                        Técnico en Administración de sistemas informáticos en red
                    </span>
                    . De Madrid, España. Especializado en convertir ideas a la realidad.
                </h2>            
            </div>
        </div>
    );
}

export default HeroSection;
