import React from 'react';
import { Link } from 'react-router-dom'; // Agrega esta línea para importar Link

const NavItem = ({ name, link }) => {
    return (
        <li className="hover:text-yellow-300 transition-colors duration-500 text-[13px] ">
            <Link to={link}>{name}</Link>
        </li>
    );
};

export default NavItem;
