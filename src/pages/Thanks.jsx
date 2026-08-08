import React from 'react';
import HelmetSEO from '../components/HelmetSEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/sensei-squeegee-logo.png';

export default function Thanks() {
  return (
    <>
      <HelmetSEO
        pageTitle="Thank You | Sensei Squeegee"
        metaDescription="Thanks for getting in touch with Sensei Squeegee. We'll be in touch shortly."
      />

      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-off-white">
        <h1 className="text-4xl font-heading font-bold text-sensei-dark mb-4">
          Thanks for Reaching Out
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Your message has been received — the sensei bows in gratitude. We&rsquo;ll be in touch
          shortly to talk windows.
        </p>
        <img src={logo} alt="Sensei Squeegee logo" className="w-40 mt-10" />
      </main>
      <Footer />
    </>
  );
}
