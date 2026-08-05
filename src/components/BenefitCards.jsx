import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BenefitCards({ heading, benefits }) {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-off-white text-sensei-dark py-16">
      <div className="max-w-7xl mx-auto sm:px-4 px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-cursive font-bold text-sensei-dark mb-8 inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map(({ icon, alt, text }, i) => (
            <motion.div
              key={i}
              className="bg-white text-sensei-dark p-6 rounded-2xl shadow-md text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              custom={i}
              variants={cardVariants}
            >
              <img
                src={icon}
                alt={alt || "Benefit icon"}
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="font-body font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
