// src/hooks/useFadeIn.js

import { useEffect } from 'react';

const useFadeIn = () => {
    useEffect(() => {
        // Seleccionamos todos los elementos con la clase 'fade-in'
        const fadeInElements = document.querySelectorAll('.fade-in');

        // Configuración del Intersection Observer
        const observerOptions = {
            root: null, // El viewport
            threshold: (window.innerWidth >= 200 && window.innerWidth <= 500) ? 0.2 : 0.4
            // El 30% del elemento debe estar visible para activar la animación
        };

        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target); // Deja de observar el elemento después de la animación
                }
            });
        }, observerOptions);

        // Observamos todos los elementos fade-in
        fadeInElements.forEach(element => {
            fadeInObserver.observe(element);
        });

        // Limpieza del observer cuando el componente se desmonte
        return () => {
            fadeInElements.forEach(element => {
                fadeInObserver.unobserve(element);
            });
        };
    }, []);
};

export default useFadeIn;
