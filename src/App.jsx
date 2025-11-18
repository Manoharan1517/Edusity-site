import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Programs from './components/programs/Programs.jsx'
import Title from './components/title/Title.jsx'
import About from './components/about/About.jsx'
import Campus from './components/campus/Campus.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Videoplayer from './components/videoplayer/Videoplayer.jsx'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAMS" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Campus" />
        <Campus />
        <Title subtitle="Testimonials" title="What students say" />
        <Testimonials />
        <Title subtitle="Contact us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
        <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
