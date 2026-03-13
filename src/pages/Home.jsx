import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Projects from '../components/home/Projects';
import Team from '../components/home/Team';
import News from '../components/home/News';
import FAQ from '../components/home/FAQ';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Team />
      <News />
      <FAQ />
      <ContactCTA />
    </main>
  );
};

export default Home;
