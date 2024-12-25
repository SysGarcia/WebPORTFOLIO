import React, { useState } from 'react';
import NavItem from './NavItem';
import NavItemHamMenu from './NavItemHamMenu';

const TopBar = ({ current_page }) => {
    const [menuOpen, setMenuOpen] = useState(false);
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
        const newLanguage = language === 'en' ? 'es' : 'en';
        setLanguage(newLanguage);
        document.title = translations[newLanguage].title; // Actualizar título de la página
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="w-full h-28 md:h-20 flex items-center max-w-7xl mx-auto justify-between text-text_primary">
            {/* Logo Section */}
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
                <span className="ml-2">Isaac García</span>
            </h2>

            {/* Mobile Menu Button */}
            <div className="md:hidden mr-6">
                <button onClick={toggleMenu} aria-label="Toggle navigation menu">
                    <svg
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                    >
                        <path
                            class="stroke-button_primary"
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
                className={`fixed top-0 right-0 h-full bg-bg_primary z-50 transform transition-transform duration-300 ease-in-out ${
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
                <ul className="h-full flex flex-col justify-center items-center gap-2 text-lg text-text_primary">
                    <NavItemHamMenu id="about" link="/" name={translations[language].about} current={current_page} icon='<svg class="fill-text_primary" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7,22 C5.34314575,22 4,20.6568542 4,19 L4,13 L3,13 C2.10909515,13 1.66292836,11.9228581 2.29289322,11.2928932 L11.2928932,2.29289322 C11.6834175,1.90236893 12.3165825,1.90236893 12.7071068,2.29289322 L21.7071068,11.2928932 C22.3370716,11.9228581 21.8909049,13 21,13 L20,13 L20,19 C20,20.6568542 18.6568542,22 17,22 L7,22 Z M12,4.41421356 L5.35091163,11.0633019 C5.73009945,11.2054205 6,11.5711909 6,12 L6,19 C6,19.5522847 6.44771525,20 7,20 L8.99999525,19.999 L9,16 C9,14.8954305 9.8954305,14 11,14 L13,14 C14.1045695,14 15,14.8954305 15,16 L14.9999952,19.999 L17,20 C17.5522847,20 18,19.5522847 18,19 L18,12 C18,11.5711909 18.2699006,11.2054205 18.6490884,11.0633019 L12,4.41421356 Z M12.9999952,16 L10.9999952,16 L10.9999952,19.999 L12.9999952,19.999 L12.9999952,16 Z"/></svg>'/>
                    <NavItemHamMenu id="work" link="/work" name={translations[language].work} current={current_page}  icon='<svg width="20px" height="20px" viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="stroke-text_primary" d="M0.12 0.36H0.09V0.24a0.06 0.06 0 0 1 0.06 -0.06h0.12m-0.15 0.18v0.18a0.06 0.06 0 0 0 0.06 0.06h0.36a0.06 0.06 0 0 0 0.06 -0.06v-0.18M0.12 0.36h0.18m0.3 0h0.03V0.24a0.06 0.06 0 0 0 -0.06 -0.06h-0.12m0.15 0.18h-0.18m0 0v-0.06h-0.12v0.06m0.12 0v0.06h-0.12v-0.06M0.27 0.18V0.15a0.06 0.06 0 0 1 0.06 -0.06h0.06a0.06 0.06 0 0 1 0.06 0.06v0.03M0.27 0.18h0.18" stroke-width="0.06" stroke-linecap="round" stroke-linejoin="round"/></svg>' />
                    <NavItemHamMenu id="studies" link="/studies" name={translations[language].studies}current={current_page}  icon='<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="14" r="4" class="stroke-text_primary" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle class="stroke-text_primary" cx="18" cy="14" r="4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M10 14L10.2111 13.8944C11.3373 13.3314 12.6627 13.3314 13.7889 13.8944L14 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M19 6L21.8383 12.6227C21.945 12.8716 22 13.1397 22 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6L2.16171 12.6227C2.05502 12.8716 2 13.1397 2 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'/>
                    <NavItemHamMenu id="skills" link="/skills" name={translations[language].skills} current={current_page} icon='<svg class="fill-text_primary" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M5,19H1c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v7C6,18.6,5.6,19,5,19z M2,17h2v-5H2V17z"/><path d="M11,6H9C8.4,6,8,6.4,8,7v11c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V7C12,6.4,11.6,6,11,6z"/><path d="M19,19h-4c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v16C20,18.6,19.6,19,19,19z M16,17h2V3h-2V17z"/></svg>' />
                    <NavItemHamMenu id="blog" link="/blog" name={translations[language].blog} icon='<svg class="fill-text_primary" width="19px" height="19px" viewBox="0 0 2.88 2.88" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M0.36 2.16a0.36 0.36 0 1 0 0.36 0.36 0.36 0.36 0 0 0 -0.36 -0.36"/><path d="M0.36 1.08a0.18 0.18 0 0 0 0 0.36 1.081 1.081 0 0 1 1.08 1.08 0.18 0.18 0 0 0 0.36 0 1.441 1.441 0 0 0 -1.44 -1.44"/><path d="M0.36 0a0.18 0.18 0 0 0 0 0.36 2.162 2.162 0 0 1 2.16 2.16 0.18 0.18 0 0 0 0.36 0A2.523 2.523 0 0 0 0.36 0"/></g></svg>' />
                    <NavItemHamMenu id="contact" link="/contact" name={translations[language].contact} current={current_page} icon='<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="stroke-text_primary" cx="12" cy="7" r="5" stroke="#fff" stroke-width="2"/><path class="stroke-text_primary" d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' />
                </ul>
            </nav>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 mr-6">
                <NavItem id="about_mobile" link="/" name={translations[language].about} />
                <NavItem id="work_mobile" link="/work" name={translations[language].work} />
                <NavItem id="studies_mobile" link="/studies" name={translations[language].studies} />
                <NavItem id="skills_mobile" link="/skills" name={translations[language].skills} />
                <NavItem id="blog_mobile" link="/blog" name={translations[language].blog} />
                <NavItem id="contact_mobile" link="/contact" name={translations[language].contact} />
                <button onClick={toggleLanguage} aria-label="Change language">
                    <svg
                        class="hover:stroke-button_primary transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-languages h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
                    >
                        <path d="m5 8 6 6"></path>
                        <path d="m4 14 6-6 2-3"></path>
                        <path d="M2 5h12"></path>
                        <path d="M7 2h1"></path>
                        <path d="m22 22-5-10-5 10"></path>
                        <path d="M14 18h6"></path>
                    </svg>
                </button>
            </ul>
        </header>
    );
};

export default TopBar;
