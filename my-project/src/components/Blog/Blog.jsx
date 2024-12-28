'use client'

import React, { useState } from 'react';
import Image3D from '../../Assets/3dImage.png'

const blogPost = {
  title: "No es todo, y es que tengo un Blog!",
  excerpt: "Descubre más sobre mí, conoce mis proyectos y mis pensamientos, y explora algunos de mis artículos, donde comparto mis conocimientos y reflexiones sobre diversos temas.",
  imageUrl: Image3D,
};

export function Blog({className}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`${className}`} id="blog">
      <div className='py-12 px-4 p-2 my-2 overflow-visible'>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 relative z-10">
              <h2 className="text-4xl font-bold text-text_primary leading-tight">{blogPost.title}</h2>
              <p className="text-lg text-text_secondary">{blogPost.excerpt}</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="/Blog" 
                  className="px-6 py-2 bg-button_secondary text-text_primary rounded-lg inline-flex items-center space-x-2 hover:bg-button_primary transition duration-300"
                  aria-label="Leer más sobre el blog"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Blog!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Imagen del blog */}
            <div className="relative mt-10 md:mt-0">
            <div className="absolute inset-0 bg-button_secondary rounded-lg transform rotate-3 z-[9998]"></div>
              <div className="absolute inset-0 bg-button_secondary/10 rounded-lg transform rotate-12 z-[9997]"></div>
              <div
                className={`relative z-[9999] transition-transform duration-300 ${
                  isHovered ? ' translate-y-[-5px]' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={blogPost.imageUrl}
                  alt="Imagen representativa del blog"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 -translate-x-1/7 -translate-y-1/4 w-24 h-24 bg-button_secondary rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/6 translate-y-1/3 w-16 h-16 bg-button_primary rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

