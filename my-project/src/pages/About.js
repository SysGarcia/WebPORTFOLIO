import React from 'react';
import '../index.css';
import useFadeIn from '../Hooks/UseFadeIn';

import { Hero } from '../components/Hero';
import { Blog } from '../components/Blog';
import { Skills } from '../components/Skills';
import { Work } from '../components/Work';
import { Studies } from '../components/Studies';
import { Projects } from '../components/Projects.jsx';

const About = () => {
  useFadeIn();
  return (
      <div id="about" className='flex flex-col gap-y-20'>
          <Hero className="fade-in" />
          <Work className="fade-in" />
          <Studies className="fade-in" />
          <Skills className="fade-in" />
          <Projects className="fade-in" />
          <Blog className="fade-in" />
      </div>
  );
};

export default About;