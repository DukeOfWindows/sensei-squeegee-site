import React from 'react';
import { motion } from 'framer-motion';
import iconLocal from '../images/icons/shield-dark.png';
import iconWindow from '../images/icons/window-dark.png';
import iconTrained from '../images/icons/trained-dark.png';
import iconGear from '../images/icons/gear-dark.png';
import iconQuote from '../images/icons/arrange-dark.png';
import iconSafety from '../images/icons/safety-dark.png';
// TODO: Placeholder image from the layout template — replace with a real photo of your brother at work.
import workPhoto from '../images/exterior-window-cleaning.webp';

export default function WhyUs() {
  const features = [
    {
      icon: iconLocal,
      alt: 'Local shield icon',
      title: 'Local to Hamilton',
      description:
        'Based in Flagstaff and servicing all of Hamilton. Your neighbourhood window sensei.',
    },
    {
      icon: iconWindow,
      alt: 'Window icon',
      title: 'Windows only — by choice',
      description:
        'Interior and exterior residential window cleaning is all we do. One discipline, practised daily.',
    },
    {
      icon: iconTrained,
      alt: 'Training icon',
      title: 'Sensei-level standards',
      description:
        'Run by an actual karate sensei. The same patience and precision from the dojo goes into every pane.',
    },
    {
      icon: iconGear,
      alt: 'Gear icon',
      title: 'The right tools for the job',
      description:
        'A pure water cleaning system, commercial-grade squeegees, and telescopic poles — not a rag and a bucket of hope.',
    },
    {
      icon: iconQuote,
      alt: 'Quote icon',
      title: 'Free, no-pressure quotes',
      description:
        'A clear price before we start. No obligation, no hard sell.',
    },
    {
      icon: iconSafety,
      alt: 'Safety icon',
      title: 'Careful in your home',
      description:
        'Tidy, respectful, and careful around your furniture, curtains and gardens.', // TODO: confirm insurance status before claiming "fully insured"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-stretch">
        {/* Left: Animated Image */}
        <motion.div
          className="flex justify-center items-center h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          {/* TODO: Placeholder image — replace with a real Sensei Squeegee photo */}
          <img
            src={workPhoto}
            alt="Exterior window cleaning in progress (placeholder image)"
            className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-4xl font-cursive font-bold text-sensei-dark mb-8 inline-block relative after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
            Why Choose the Sensei?
          </h2>

          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                viewport={{ amount: 0.3 }}
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-12 h-12 mt-1"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-sensei-dark">{item.title}</h4>
                  <p className="text-gray-700 font-body text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
