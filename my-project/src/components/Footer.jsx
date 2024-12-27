import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-button_primary text-text_primary py-3 mt-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
          </div>
        </div>
        <div className="text-center text-text_primary">
          <p>&copy; {new Date().getFullYear()} Isaac García Durán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

