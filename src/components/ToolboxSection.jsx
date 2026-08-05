import React from 'react';
import { motion } from 'framer-motion';

const toolboxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function ToolboxSection({ title = "Our Toolkit", subtitle, description, items = [] }) {
  return (
    <section className="bg-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-cursive font-bold text-sensei-dark mb-8 inline-block relative after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        {description && <p className="text-base text-gray-600 max-w-2xl mx-auto mt-2">{description}</p>}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((tool, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            variants={toolboxVariants}
          >
            <img
              src={tool.image}
              alt={tool.alt || tool.title}
              loading="lazy"
              className="w-full h-full object-cover aspect-square"
            />

            {/* Default Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm font-semibold p-2 text-center z-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              {tool.title}
            </div>

            {/* Slide-up Overlay */}
            <div className="absolute inset-0">
              <div className="h-full w-full bg-sensei-dark text-white px-4 py-6 transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out flex flex-col justify-center text-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2">{tool.title}</h4>
                <p className="text-sm font-body">{tool.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
