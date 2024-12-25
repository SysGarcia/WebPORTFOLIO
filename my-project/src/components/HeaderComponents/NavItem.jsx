import React from 'react';

const NavItem = ({ id, name, link }) => {
        const handleClick = (e) => {
          e.preventDefault(); // Prevenir el comportamiento por defecto
      
          const target = document.querySelector(link);  // Obtener el destino del ancla
          const offset = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 10 rem en píxeles
      
          window.scrollTo({
            top: target.offsetTop - offset, // Desplazarse 10 rem arriba del destino
            behavior: 'smooth', // Desplazamiento suave
          });
        };      
  
    return (
      <li id={id} className="hover:text-button_primary transition-colors duration-500 text-[13px]">
        <a href={link} onClick={handleClick}>{name}</a>
      </li>
    );
  };
  
export default NavItem;
