import React from 'react';
import { motion } from 'framer-motion';
import HelmetSEO from '../components/HelmetSEO';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// TODO: Placeholder hero image from the layout template — replace with a real photo.
import contactHero from '../images/contact-hero.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <>
      <HelmetSEO
        pageTitle="Contact & Free Quotes | Sensei Squeegee — Hamilton Window Cleaning"
        metaDescription="Request a free window cleaning quote from Sensei Squeegee. Interior and exterior residential window cleaning, servicing Ngāruawāhia to Te Awamutu."
        canonicalUrl="https://senseisqueegee.co.nz/contact"
      />

      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="bg-black bg-opacity-50 px-8 py-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Bow In &amp; Say Hello</h1>
        </div>
      </section>

      {/* Contact Info */}
      <motion.section
        className="w-full bg-white py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6 text-sensei-dark font-body space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-cursive font-bold text-sensei-dark mb-4 inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
            Let&rsquo;s Chat
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Quick question or ready for a quote? Fill in the form below, or get in touch directly.
          </p>
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+64272028687" className="text-sensei-blue hover:underline">
                027 202 8687
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:barney@senseisqueegee.co.nz" className="text-sensei-blue hover:underline">
                barney@senseisqueegee.co.nz
              </a>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Quote Form */}
      <motion.section
        className="w-full bg-off-white py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <ContactForm />
        </div>
      </motion.section>

      {/* Service Area */}
      <motion.section
        id="service-area"
        className="w-full py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto px-6 text-center text-sensei-dark font-body">
          <h2 className="text-3xl font-cursive font-bold mb-6 inline-block relative after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
            Where We Work
          </h2>
          <p className="text-base leading-relaxed">
            We service <strong>Ngāruawāhia to Te Awamutu</strong>. Not sure if you&rsquo;re in
            range? Ask — the sensei is reasonable.
          </p>
          {/* TODO: Add a Hamilton service-area map here once the suburb list is confirmed
              (e.g. a Google My Maps embed created for Sensei Squeegee — do NOT reuse maps
              from any other business). */}
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
