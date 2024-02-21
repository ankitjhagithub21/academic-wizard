import React from 'react';
import Syllabus from '../../components/Syllabus/Syllabus';

import About from '../About/About';
import Notes from '../Notes/Notes';
import Pyq from '../PYQ/Pyq';

const Home = () => {
  return (
    <section id="home">
    
      <Syllabus />
      <Notes/>
      <About/>
      <Pyq/>
      

    </section>
  );
};

export default Home;
