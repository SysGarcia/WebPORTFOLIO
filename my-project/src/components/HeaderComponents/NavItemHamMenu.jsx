import { Link, useLocation } from 'react-router-dom'; // Importa useLocation

const NavItemHamMenu = ({ name, icon, link }) => {
    const location = useLocation(); // Obtén la ubicación actual

    const renderIcon = icon ? (
        <span
            className="flex items-center justify-center w-12"
            dangerouslySetInnerHTML={{ __html: icon }}
        />
    ) : null;

    return (
        <li
            className={`flex w-full items-center hover:text-yellow-300 transition-colors duration-500 text-[13px] gap-x-4 ${
                location.pathname === link ? "bg-[#ffffff13]" : ""
            }`} // Compara la ruta actual con el link
        >
            {/* Icon column */}
            <div className="flex items-center justify-center w-12">{renderIcon}</div>

            {/* Text column */}
            <Link to={link} className="flex-1 text-left py-3 pr-4">
                {name}
            </Link>
        </li>
    );
};

export default NavItemHamMenu;
