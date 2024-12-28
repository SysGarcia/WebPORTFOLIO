import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import NavItemHamMenu from "./NavItemHamMenu";

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
    if (window.scrollY > 50) {
      // Si se ha hecho scroll más de 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Añadir el event listener de scroll cuando el componente se monte
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-24 flex items-center max-w-7xl mx-auto justify-between text-text_primary fixed inset-x-0 top-0 z-20 transition-all ${
        scrolled
          ? "max-w-full bg-[#00000048] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
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
            class="stroke-text_primary"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span className="ml-2">
          <a href="/">Isaac García</a>
        </span>
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
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "73%" }}
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
            link={current_page === "/blog" ? "/" : "#about"}
            name="Perfil"
            Blog
            current={current_page}
            icon='<svg class="fill-text_primary" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7,22 C5.34314575,22 4,20.6568542 4,19 L4,13 L3,13 C2.10909515,13 1.66292836,11.9228581 2.29289322,11.2928932 L11.2928932,2.29289322 C11.6834175,1.90236893 12.3165825,1.90236893 12.7071068,2.29289322 L21.7071068,11.2928932 C22.3370716,11.9228581 21.8909049,13 21,13 L20,13 L20,19 C20,20.6568542 18.6568542,22 17,22 L7,22 Z M12,4.41421356 L5.35091163,11.0633019 C5.73009945,11.2054205 6,11.5711909 6,12 L6,19 C6,19.5522847 6.44771525,20 7,20 L8.99999525,19.999 L9,16 C9,14.8954305 9.8954305,14 11,14 L13,14 C14.1045695,14 15,14.8954305 15,16 L14.9999952,19.999 L17,20 C17.5522847,20 18,19.5522847 18,19 L18,12 C18,11.5711909 18.2699006,11.2054205 18.6490884,11.0633019 L12,4.41421356 Z M12.9999952,16 L10.9999952,16 L10.9999952,19.999 L12.9999952,19.999 L12.9999952,16 Z"/></svg>'
          />
          <NavItemHamMenu
            link={current_page === "/blog" ? "/" : "#work"}
            name="Experiencia"
            current={current_page}
            icon='<svg class="w-5 h-5 fill-text_primary sm:w-7 sm:h-7 flex-shrink-0 workicon_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.314 18.022l5 4.707a1 1 0 0 0 1.372 0l5-4.707a1 1 0 0 0 .28-.985L15.091 6.212 17.8 2.6A1 1 0 0 0 17 1H7a1 1 0 0 0-.8 1.6l2.709 3.612-2.875 10.825a1 1 0 0 0 .28.985zM15 3l-1.5 2h-3L9 3zm-4.231 4h2.462l2.649 9.975L12 20.627l-3.88-3.652z"></path></svg>'
          />
          <NavItemHamMenu
            link={current_page === "/blog" ? "/" : "#studies"}
            name="Formación"
            current={current_page}
            icon='<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="14" r="4" class="stroke-text_primary" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle class="stroke-text_primary" cx="18" cy="14" r="4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M10 14L10.2111 13.8944C11.3373 13.3314 12.6627 13.3314 13.7889 13.8944L14 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="stroke-text_primary" d="M19 6L21.8383 12.6227C21.945 12.8716 22 13.1397 22 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6L2.16171 12.6227C2.05502 12.8716 2 13.1397 2 13.4105V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          />
          <NavItemHamMenu
            link={current_page === "/blog" ? "/" : "#skills"}
            name="Habilidades"
            current={current_page}
            icon='<svg class="fill-text_primary" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M5,19H1c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v7C6,18.6,5.6,19,5,19z M2,17h2v-5H2V17z"/><path d="M11,6H9C8.4,6,8,6.4,8,7v11c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V7C12,6.4,11.6,6,11,6z"/><path d="M19,19h-4c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v16C20,18.6,19.6,19,19,19z M16,17h2V3h-2V17z"/></svg>'
          />
        <NavItemHamMenu
            link={current_page === "/blog" ? "/" : "#projects"}
            name="Proyectos"
            current={current_page}
            icon='<svg class="fill-text_primary" width="19px" height="19px" viewBox="0 -0.06 0.6 0.6" xmlns="http://www.w3.org/2000/svg"> <path d="M.382.002A.03.03 0 0 1 .4.043L.256.459C.25.475.233.484.218.478A.03.03 0 0 1 .2.437L.344.021C.35.005.367-.004.382.002m-.31.246L.178.36a.033.033 0 0 1 0 .045.03.03 0 0 1-.042 0L.009.27a.033.033 0 0 1 0-.045L.136.091a.03.03 0 0 1 .042 0 .033.033 0 0 1 0 .045zm.455 0L.421.136a.033.033 0 0 1 0-.045.03.03 0 0 1 .042 0L.59.225a.033.033 0 0 1 0 .045L.463.404a.03.03 0 0 1-.042 0 .033.033 0 0 1 0-.045z"/> </svg>'
          />
          <NavItemHamMenu
            link={current_page === "/blog" ? "/blog" : "#blog"}
            name="Blog"
            current={current_page}
            icon='<svg class="fill-text_primary" width="19px" height="19px" viewBox="0 0 2.88 2.88" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M0.36 2.16a0.36 0.36 0 1 0 0.36 0.36 0.36 0.36 0 0 0 -0.36 -0.36"/><path d="M0.36 1.08a0.18 0.18 0 0 0 0 0.36 1.081 1.081 0 0 1 1.08 1.08 0.18 0.18 0 0 0 0.36 0 1.441 1.441 0 0 0 -1.44 -1.44"/><path d="M0.36 0a0.18 0.18 0 0 0 0 0.36 2.162 2.162 0 0 1 2.16 2.16 0.18 0.18 0 0 0 0.36 0A2.523 2.523 0 0 0 0.36 0"/></g></svg>'
          />
          <NavItemHamMenu
            link="mailto:isaacgarciaduran45@gmail.com"
            name="Contacto"
            current={current_page}
            icon='<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="stroke-text_primary" cx="12" cy="7" r="5" stroke="#fff" stroke-width="2"/><path class="stroke-text_primary" d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          />
        </ul>
      </nav>

      {/* Desktop Menu */}
      <ul className="hidden header:flex items-center gap-6 mr-6">
        <NavItem
          link={current_page === "/blog" ? "/" : "#about"}
          name="Perfil"
        />
        <NavItem
          link={current_page === "/blog" ? "/" : "#work"}
          name="Experiencia"
        />
        <NavItem
          link={current_page === "/blog" ? "/" : "#studies"}
          name="Formación"
        />
        <NavItem
          link={current_page === "/blog" ? "/" : "#skills"}
          name="Habilidades"
        />
        <NavItem
          link={current_page === "/blog" ? "/" : "#projects"}
          name="Proyectos"
        />
        <NavItem
          link={current_page === "/blog" ? "/blog" : "#blog"}
          name="Blog"
        />
        <NavItem link="mailto:isaacgarciaduran45@gmail.com" name="Contacto" />
      </ul>
    </header>
  );
};

export default TopBar;
