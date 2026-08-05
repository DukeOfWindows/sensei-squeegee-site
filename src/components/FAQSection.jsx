import React, { useState } from 'react';

export default function FAQSection({ faqItems }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="inline-block text-4xl font-cursive font-bold text-sensei-dark mb-10 relative after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-off-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 text-lg font-semibold text-sensei-dark focus:outline-none focus:ring-2 focus:ring-sensei-blue"
              >
                <span>{item.question}</span>
                <span
                  className={`transform transition-transform duration-300 text-xl font-bold ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pt-4 pb-4 text-gray-700 text-base text-left">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
