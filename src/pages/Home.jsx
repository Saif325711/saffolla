import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Projects from '../components/home/Projects';
import Team from '../components/home/Team';
import News from '../components/home/News';
import FAQ from '../components/home/FAQ';
import ContactCTA from '../components/home/ContactCTA';
import whatsappLogo from '../assets/images/whatsapplogo.webp';

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

      <a
        className="whatsapp-float"
        href="https://wa.me/6003359534"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        title="WhatsApp"
      >
        <img className="whatsapp-float__img" src={whatsappLogo} alt="WhatsApp" />
      </a>
    </main>
  );
};

export default Home;
