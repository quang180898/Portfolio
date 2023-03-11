import React from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Projects } from './Projects';
import { Services } from './Services';

export const MainSection = () => {

  return (
    <div className="main-section">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
    </div>
  );
}