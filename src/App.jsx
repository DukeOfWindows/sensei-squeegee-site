import React from 'react';
import HelmetSEO from './components/HelmetSEO';
import allTestimonials from './data/testimonialsData';
import TestimonialSlider from './components/TestimonialSlider';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import CTAButton from './components/CTAButton';
// TODO: Placeholder hero image from the layout template — replace with a real Sensei Squeegee photo.
import heroImage from './images/hero-image.webp';

function App() {
  return (
    <>
      <HelmetSEO
        pageTitle="Sensei Squeegee | Residential Window Cleaning, Hamilton"
        metaDescription="Interior and exterior residential window cleaning in Flagstaff and surrounding Hamilton suburbs. Streak-free, sensei-level results — request a free quote."
        canonicalUrl="https://senseisqueegee.co.nz" // TODO: confirm domain
      />

      <Navbar />
      <main>
        <section
          className="relative text-white flex items-center justify-center bg-no-repeat bg-cover bg-center min-h-[500px] md:min-h-[90vh]"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-label="Hero banner"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" aria-hidden="true" />

          <div className="relative z-10 text-center px-6 py-20 sm:py-24">
            <p className="font-cursive text-sensei-blue text-2xl mb-2">Wax on. Grime off.</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Hamilton&rsquo;s Window Cleaning Sensei
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body mb-8 max-w-2xl mx-auto">
              Interior and exterior residential window cleaning in Flagstaff and surrounding
              Hamilton suburbs.{/* TODO: confirm suburb list */} One craft, mastered — streak-free
              glass, every time.
            </p>
            <CTAButton />
          </div>
        </section>

        <WhatWeDo />
        <WhyUs />
        <HowItWorks />

        {/* Renders nothing until real testimonials are added to src/data/testimonialsData.js */}
        <section id="testimonials" className="scroll-mt-24">
          <TestimonialSlider testimonials={allTestimonials} />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
