import React from 'react';
import CTAButton from './CTAButton';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm space-y-10 md:space-y-0">

        {/* Logo + CTA */}
        <div>
          {/* TODO: Replace with the real Sensei Squeegee logo image once supplied */}
          <p className="font-heading text-2xl text-sensei-dark mb-1">
            Sensei <span className="text-belt-red">Squeegee</span>
          </p>
          <p className="font-cursive text-sensei-blue mb-4">Wax on. Grime off.</p>
          <CTAButton className="text-sm px-4 py-2" />
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sensei-dark font-bold mb-2 border-b-2 border-belt-red inline-block pb-1">Window Cleaning</h4>
          <ul className="space-y-1 text-sensei-dark">
            <li><Link to="/window-cleaning" className="hover:underline">Exterior Window Cleaning</Link></li>
            <li><Link to="/window-cleaning" className="hover:underline">Interior Window Cleaning</Link></li>
            <li><Link to="/contact" className="hover:underline">Request a Free Quote</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sensei-dark font-bold mb-2 border-b-2 border-belt-red inline-block pb-1">Explore</h4>
          <ul className="space-y-1 text-sensei-dark">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><a href="/contact#service-area" className="hover:underline">Service Area</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sensei-dark font-bold mb-2 border-b-2 border-belt-red inline-block pb-1">
            Contact Us
          </h4>
          <ul className="space-y-1 text-gray-700">
            {/* TODO: Replace with real phone/email once confirmed — do not ship "TO BE CONFIRMED" */}
            <li>Phone: <span className="italic">TO BE CONFIRMED</span></li>
            <li>Email: <span className="italic">TO BE CONFIRMED</span></li>
            <li>Servicing Flagstaff &amp; surrounding Hamilton suburbs{/* TODO: confirm suburb list */}</li>
            {/* TODO: Add Google Business Profile + social links once set up */}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 text-center py-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Sensei Squeegee. All rights reserved.</p>
        <p className="mt-1">Built with discipline, precision, and a very sharp squeegee in Hamilton, NZ.</p>
      </div>
    </footer>
  );
}
