import React from 'react';
import { motion } from 'framer-motion';
import iconEstimate from '../images/icons/arrange.png';
import iconBook from '../images/icons/book.png';
import iconThumbsUp from '../images/icons/results.png';
import CTAButton from './CTAButton';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-off-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-cursive font-bold text-sensei-dark inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
          The Way of the Squeegee
        </h2>
      </div>

      {/* Steps */}
      <motion.div
        className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <img src={iconEstimate} alt="Get a quote icon" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-sensei-dark mb-1">1. Bow In</h3>
          <p className="text-gray-700 font-body">
            Tell us about your windows and we&rsquo;ll send back a free, no-obligation quote. No pressure — that&rsquo;s not the sensei way.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img src={iconBook} alt="Book a service icon" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-sensei-dark mb-1">2. Book Your Session</h3>
          <p className="text-gray-700 font-body">
            Pick a time that suits you. We turn up when we say we will — punctuality is a discipline too.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img src={iconThumbsUp} alt="Enjoy the results icon" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-sensei-dark mb-1">3. Wax On, Grime Off</h3>
          <p className="text-gray-700 font-body">
            Sit back and enjoy the streak-free shine, inside and out. Your windows have earned their black belt.
          </p>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <CTAButton />
      </div>
    </section>
  );
}
