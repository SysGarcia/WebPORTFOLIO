import { Link, useLocation } from 'react-router-dom'; // Importa useLocation

const NavItemHamMenu = ({ name, icon, link }) => {
    const location = useLocation(); // Obtén la ubicación actual
    
    const handleClick = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto
    
        // Solo desplazar si el enlace no es un enlace de ruta
        if (link.startsWith('#')) {
            const target = document.querySelector(link);  // Obtener el destino del ancla
            const offset = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 10 rem en píxeles
    
            window.scrollTo({
              top: target.offsetTop - offset, // Desplazarse 10 rem arriba del destino
              behavior: 'smooth', // Desplazamiento suave
            });
        } else {
            // Si el enlace es de tipo ruta, navega como de costumbre
            window.location.href = link;
        }
    };

    const renderIcon = icon ? (
        <span
            className="flex items-center justify-center w-12"
            dangerouslySetInnerHTML={{ __html: icon }}
        />
    ) : null;

    return (
        <li
            className={`flex w-full items-center hover:text-button_primary transition-colors duration-500 text-[13px] gap-x-4 ${
                location.pathname === link ? "bg-[#ffffff13]" : ""
            }`} // Compara la ruta actual con el link
        >
            {/* Icon column */}
            <div className="flex items-center justify-center w-12">{renderIcon}</div>

            {/* Text column */}
            <Link 
                to={link} 
                className="flex-1 text-left py-3 pr-4"
                onClick={handleClick} // Usa la función handleClick
            >
                {name}
            </Link>
        </li>
    );
};

export default NavItemHamMenu;
