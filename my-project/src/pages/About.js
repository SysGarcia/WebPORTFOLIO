import React from 'react';
import '../index.css';
import useFadeIn from '../Hooks/UseFadeIn';

import { Hero } from '../components/Hero/Hero.jsx';
import { Blog } from '../components/Blog/Blog.jsx';
import { Skills } from '../components/Skills/Skills.jsx';
import { Work } from '../components/Work/Work.jsx';
import { Studies } from '../components/Studies/Studies.jsx';
import { Projects } from '../components/Projects/Projects.jsx';

const About = () => {
  useFadeIn();
  return (
      <div id="about" className='flex flex-col gap-y-20'>
          <Hero className="fade-in" />
          <Work className="fade-in" />
          <Studies className="fade-in" />
          <Projects className="fade-in" />
          <Skills className="fade-in" />
          <Blog className="fade-in" />
      </div>
  );
};

export default About;