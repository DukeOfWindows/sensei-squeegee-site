import React from 'react';
import { motion } from 'framer-motion';

export default function Info({
  image,
  imageAlt = "Window cleaning example",
  heading,
  paragraphs = [],
  listItems = [],
  listIntro = "What's included:",
  reverse = false,
}) {
  return (
    <section className="bg-white text-sensei-dark py-16">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-6 flex flex-col-reverse items-start gap-10 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        {/* Image Side */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="rounded-xl shadow-lg object-cover aspect-square w-full"
          />
        </motion.div>

        {/* Text Side */}
        <div className="w-full md:flex-1 md:pr-6">
          <h2 className="text-3xl md:text-4xl font-cursive font-bold text-sensei-dark mb-8 inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
            {heading}
          </h2>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {paragraphs.map((text, i) => (
              <p key={i} className="font-body text-gray-700 mb-4">{text}</p>
            ))}

            {listItems.length > 0 && (
              <>
                <p className="font-bold mb-4 border-l-4 border-belt-red pl-4">
                  {listIntro}
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-gray-700">
                  {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
