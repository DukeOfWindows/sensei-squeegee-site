import React from 'react';
import { motion } from 'framer-motion';
import HelmetSEO from '../components/HelmetSEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import WhatWeDo from '../components/WhatWeDo';

// TODO: Placeholder images from the layout template — replace with real photos of your brother
// (and the dojo connection, if he's happy to show it). Filenames lowercase-with-hyphens.
import heroAbout from '../images/contact-hero.webp';
import targetIcon from '../images/icons/target.png';
import heartIcon from '../images/icons/heart.png';
import shieldIcon from '../images/icons/shield.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutUs() {
  return (
    <>
      <HelmetSEO
        pageTitle="About | Sensei Squeegee — Hamilton Window Cleaning"
        metaDescription="Meet the sensei behind Sensei Squeegee — residential window cleaning servicing Ngāruawāhia to Te Awamutu, run with dojo-grade discipline."
        canonicalUrl="https://senseisqueegee.co.nz/about"
      />

      <Navbar />

      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${heroAbout})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-heading font-bold mb-4">
            Meet the Sensei
          </h1>
          <p className="text-xl font-body">
            Karate instructor by passion. Window cleaner by profession. Perfectionist by both.
          </p>
        </motion.div>
      </section>

      <main className="bg-white text-sensei-dark py-16 px-6 max-w-7xl mx-auto space-y-20">
        {/* Origin Story */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-cursive font-bold mb-4 inline-block relative after:block after:w-full after:h-[3px] after:bg-belt-red after:mt-2">
            Why &ldquo;Sensei Squeegee&rdquo;?
          </h2>
          <p className="text-lg font-body mb-4">
            When you run a karate dojo, people expect discipline, precision, and respect. It turns
            out those are exactly the qualities you want in the person cleaning your windows, too.
          </p>
          <p className="text-lg font-body mb-4">
            Sensei Squeegee brings that dojo mindset to window cleaning: one craft, practised
            properly, with no shortcuts.
          </p>
          <p className="text-lg font-body mb-4">
            In 2020, I founded Toatakai Karate in Saint Andrews, Hamilton. Since then, I&rsquo;ve
            spent my days coaching kids, teenagers, and adults, helping them build confidence,
            discipline, and achieve their goals — both on and off the mats.
          </p>
          <p className="text-lg font-body mb-4">
            In 2024, I decided to learn a new trade from two people who know it best: my brother,
            who runs a full-time window cleaning business in Wellington, and my uncle, who does
            the same in Wanaka. Between them, they have years of experience, and I was fortunate
            enough to learn the techniques, attention to detail, and professional standards that
            make the difference between simply washing windows and doing the job properly.
          </p>
          <p className="text-lg font-body mb-4">
            Today, Sensei Squeegee combines those skills with the same values I bring to karate —
            turning up on time, taking pride in the little details, treating every customer&rsquo;s
            home with respect, and leaving things better than I found them.
          </p>
          <p className="text-lg font-body">
            Window cleaning also gives me the flexibility to continue coaching athletes as they
            represent New Zealand around the world. You can check out our karate club at{' '}
            <a
              href="https://www.toatakaikarate.co.nz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sensei-blue hover:underline"
            >
              toatakaikarate.co.nz
            </a>.
          </p>
        </motion.section>

        {/* TODO: "Meet the Team" section removed until real bios/photos exist.
            When ready, add a card per person with a real photo and real bio here. */}
      </main>

      {/* Values */}
      <section className="w-full bg-off-white grid md:grid-cols-3 gap-10 py-16 px-6">
        {[
          {
            icon: targetIcon,
            alt: 'Target icon',
            title: 'Precision',
            text: 'A karate technique is a thousand small details done right. So is a streak-free window. We sweat the details so your glass disappears.',
          },
          {
            icon: heartIcon,
            alt: 'Heart icon',
            title: 'Respect',
            text: 'Dojo etiquette applies in your home: we turn up on time, treat your place with care, and leave it exactly as we found it — but with cleaner windows.',
          },
          {
            icon: shieldIcon,
            alt: 'Shield icon',
            title: 'Discipline',
            text: 'One service, done properly, every time. No upsells, no shortcuts — just consistent, sensei-level work.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-sensei-dark text-center px-4 py-8 bg-white shadow-md rounded-xl transition-transform hover:scale-[1.02]"
          >
            <img src={item.icon} alt={item.alt} loading="lazy" className="w-14 h-14 mb-4" />
            <h4 className="text-xl font-bold mb-3 inline-block relative after:block after:w-full after:h-[3px] after:bg-belt-red after:mt-1">
              {item.title}
            </h4>
            <p className="font-body text-sm text-gray-800">{item.text}</p>
          </div>
        ))}
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <WhatWeDo />
        <div className="text-center">
          <CTAButton />
        </div>
      </div>

      <Footer />
    </>
  );
}
