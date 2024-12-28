import React from 'react';

const NavItem = ({ id, name, link }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto

    // Si el link es un mailto, abrirlo en una nueva ventana (sin hacer scroll)
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else if (link.startsWith('#')) {
      // Solo aplicar desplazamiento suave si el link tiene un ancla
      const target = document.querySelector(link);  
      if (target) {
        const offset = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 10 rem en píxeles
        window.scrollTo({
          top: target.offsetTop - offset, // Desplazarse 10 rem arriba del destino
          behavior: 'smooth', // Desplazamiento suave
        });
      }
    } else {
      // Si el link es una ruta normal (no contiene '#'), no hacer nada
      window.location.href = link;
    }
  };

  return (
    <li id={id} className="hover:text-button_primary transition-colors duration-500 text-[13px]">
      <a href={link} onClick={handleClick}>{name}</a>
    </li>
  );
};

export default NavItem;
