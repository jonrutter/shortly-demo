import React from 'react';

// Components
import SkipToContent from './SkipToContent';
import Navbar from './Navbar';
import Hero from './Hero';
import Shortener from './Shortener';
import InfoSection from './InfoSection';
import CTASection from './CTASection';
import Footer from './Footer';

const App = () => (
  <>
    <SkipToContent />
    <Navbar />
    <main id="main">
      <Hero />
      <Shortener />
      <InfoSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default App;
