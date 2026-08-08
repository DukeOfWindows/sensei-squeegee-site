// One service, mastered: interior + exterior residential window cleaning.
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import windowIcon from '../images/icons/window.png';
import windowDarkIcon from '../images/icons/window-dark.png';
// TODO: Placeholder image from the layout template — replace with a real Sensei Squeegee photo once supplied.
import windowPhoto from '../images/interior-glass-clean.webp';

export default function WhatWeDo() {
  const services = [
    {
      label: 'Exterior Window Cleaning',
      icon: windowIcon,
      description:
        'Streak-free glass on the outside, where the weather does its worst. Frames and sills wiped down as part of the service.',
      link: '/window-cleaning',
    },
    {
      label: 'Interior Window Cleaning',
      icon: windowDarkIcon,
      description:
        'Careful, tidy work inside your home — fingerprints, smudges and dust dealt to, with total respect for your space.',
      link: '/window-cleaning',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        {/* Left: Services List */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl font-cursive text-sensei-dark font-bold mb-4 inline-block relative after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2"
          >
            One Service. Mastered.
          </motion.h2>

          <p className="font-body text-gray-700 mb-6">
            We don&rsquo;t do gutters, roofs, or house washing. We do windows — interior and
            exterior, for homes in Hamilton — and we do them properly.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-4"
          >
            {services.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="flex items-start space-x-4 p-4 rounded-xl shadow-md bg-off-white hover:bg-white hover:border hover:border-belt-red transition no-underline"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <img src={item.icon} alt={`${item.label} icon`} className="w-18 h-18" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-sensei-dark">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <span className="text-sm font-semibold block mt-1 text-sensei-blue">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.4 }}
          className="hidden md:block"
        >
          {/* TODO: Placeholder image from the layout template — replace with a real photo */}
          <img
            src={windowPhoto}
            alt="Freshly cleaned window glass (placeholder image)"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
