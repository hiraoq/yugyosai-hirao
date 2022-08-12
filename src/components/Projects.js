import React from 'react';
import About from './About';
import Cuisine from './Cuisine';
import Ikesu from './Ikesu';
import Interior from './Interior';


export default function Projects() {
  return (
    <section id="projects" className="projects-section bg-light">
      <Cuisine />
      <About />
      <Ikesu />
      <Interior />
    </section>
  );
}