import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TestimonialSlider({ testimonials = [] }) {
  // No invented reviews: while there are no real testimonials, render nothing.
  if (!testimonials.length) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-cursive font-bold text-sensei-dark inline-block relative after:block after:w-full after:h-[3px] after:bg-belt-red after:rounded-full after:mt-2">
          What Hamilton Locals Say
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-100 rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
              >
                <div className="bg-off-white p-6">
                  <p className="text-gray-800 font-body italic">{review.quote}</p>
                </div>
                <div className="bg-sensei-dark text-white text-center py-4">
                  <div className="mb-2 text-yellow-400 text-lg">★★★★★</div>
                  <div className="font-heading text-lg">{review.name}</div>
                  <div className="text-sm italic text-gray-300">{review.location}</div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
