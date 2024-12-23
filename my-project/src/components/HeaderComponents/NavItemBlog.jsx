import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

const NavItemBlog = ({ name, link, mobile }) => {
    if (mobile === "true") {
        return (
            <li className="py-1 flex w-full justify-end transition-colors duration-500 text-[13px] px-8">
                <Link to={link} className='flex w-full justify-center border-2 border-yellow-300 hover:border-[#fff0] rounded-full font-semibold hover:text-[#000000e5] transition-colors'>{name}</Link>
            </li>
        );  
    }
    return (
        <li className="flex justify-end hover:text-yellow-300 transition-colors duration-500 text-[13px]">
            <Link to={link} className='flex justify-end border-2 hover:border-[#fff0] border-yellow-400 px-4 py-1 rounded-full hover:bg-yellow-300 font-semibold hover:text-[#000000e5] transition-colors'>{name}</Link>
        </li>
    );
};

export default NavItemBlog;
