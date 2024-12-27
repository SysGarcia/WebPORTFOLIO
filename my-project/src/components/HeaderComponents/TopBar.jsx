import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import NavItemHamMenu from './NavItemHamMenu';

const TopBar = ({ current_page }) => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    /*
    const [language, setLanguage] = useState('en'); // Estado para el idioma actual

    // Diccionario de traducciones
    const translations = {
        en: {
            title: "Isaac García 🌑",
            about: "About me",
            work: "Work Experience",
            studies: "Studies",
            skills: "Skills",
            blog: "Blog",
            contact: "Contact",
        },
        es: {
            title: "Isaac García 🌒",
            about: "Sobre mí",
            work: "Experiencia laboral",
            studies: "Estudios",
            skills: "Habilidades",
            blog: "Blog",
            contact: "Contacto",
        },
    };

    // Alternar idioma
    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'es' : 'es';
        setLanguage(newLanguage);
        document.title = translations[newLanguage].title; // Actualizar título de la página
    };*/

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const [scrolled, setScrolled] = useState(false);

    // Maneja el evento de scroll
    const handleScroll = () => {
        if (window.scrollY > 50) { // Si se ha hecho scroll más de 50px
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        // Añadir el event listener de scroll cuando el componente se monte
        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full h-24 flex items-center max-w-7xl mx-auto justify-between text-text_primary fixed inset-x-0 top-0 z-20 transition-all ${scrolled ? 'max-w-full bg-[#00000048] backdrop-blur-sm' : 'bg-transparent'}`}>
            <h2 className="font-semibold flex items-center text-2xl ml-6">
                    <svg
                        width="34px"
                        height="34px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.5 5H9C7.89543 5 7 5.89543 7 7V9C7 10 6.4 12 4 12C5 12 7 12.6 7 15V17.0002C7 18.1048 7.89543 19 9 19H9.5M14.5 5H15C16.1046 5 17 5.89543 17 7V9C17 10 17.6 12 20 12C19 12 17 12.6 17 15V17.0002C17 18.1048 16.1046 19 15 19H14.5"
                            class='stroke-text_primary'
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                    <span className="ml-2"><a href='/'>Isaac García</a></span>
                </h2>

                {/* Mobile Menu Button */}
                <div className="header:hidden mr-6">
                    <button onClick={toggleMenu} aria-label="Toggle navigation menu">
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                        >
                            <path
                                class="stroke-button_secondary"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8h15M5 16h22M5 24h22M5 11l3-3-3-3"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <nav
                    className={`header:hidden fixed top-0 right-0 h-svh bg-bg_primary z-50 transform transition-transform duration-300 ease-in-out ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    style={{ width: '73%' }}
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-text_primary mr-3 mt-5 text-2xl"
                        aria-label="Close navigation menu"
                    >
                        ✕
                    </button>
                    <ul className="h-svh flex header:hidden flex-col justify-center items-center gap-2 text-lg text-text_primary">
                    <NavItemHamMenu 
                        link={current_page === '/blog' ? "#about" : "#about"} 
                        name="Sobre mí" 
                        current={current_page} 
                    />
                    <NavItemHamMenu 
                        link={current_page === '/blog' ? "/" : "#work"} 
                        name="Experiencia Laboral" 
                        current={current_page} 
                    />
                    <NavItemHamMenu 
                        link={current_page === '/blog' ? "/" : "#studies"} 
                        name="Formación" 
                        current={current_page} 
                    />
                    <NavItemHamMenu 
                        link={current_page === '/blog' ? "/" : "#skills"} 
                        name="Habilidades" 
                        current={current_page} 
                    />
                    <NavItemHamMenu 
                        link={current_page === '/' ? "/" : "#blog"} 
                        name="Blog" 
                        current={current_page} 
                    />
                    <NavItemHamMenu 
                        link="mailto:isaacgarciaduran45@gmail.com" 
                        name="Contacto" 
                        current={current_page} 
                    />
                </ul>
            </nav>

            {/* Desktop Menu */}
            <ul className="hidden header:flex items-center gap-6 mr-6">
                <NavItem 
                    link={current_page === '/' ? "#about" : "#about"} 
                    name="Sobre mí"
                />
                <NavItem 
                    link={current_page === '/' ? "#work" : "#work"} 
                    name="Experiencia Laboral"
                />
                <NavItem 
                    link={current_page === '/' ? "#studies" : "#studies"} 
                    name="Formación"
                />
                <NavItem 
                    link={current_page === '/' ? "#skills" : "#skills"} 
                    name="Habilidades"
                />
                <NavItem 
                    link={current_page === '/' ? "#blog" : "#blog"} 
                    name="Blog"
                />
                <NavItem 
                    link="mailto:isaacgarciaduran45@gmail.com" 
                    name="Contacto"
                />
            </ul>
            </header>
    );
};

export default TopBar;
