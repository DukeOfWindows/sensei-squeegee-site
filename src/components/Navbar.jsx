import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import CTAButton from './CTAButton';
import emblem from '../images/sensei-squeegee-emblem.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Window Cleaning', href: '/window-cleaning' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClose = () => setMenuOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3" aria-label="Sensei Squeegee home">
            <img
              src={emblem}
              alt="Sensei Squeegee logo"
              className="h-10 md:h-12 w-auto transition-all duration-200"
            />
            <span className="font-heading text-2xl md:text-3xl text-sensei-dark tracking-wide">
              Sensei <span className="text-sensei-blue">Squeegee</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-2 py-2 font-heading text-lg tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-belt-red' : 'text-gray-700 hover:text-sensei-blue'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <CTAButton className="text-base py-2 px-4">Free Quote</CTAButton>

            <div className="flex flex-col text-sm font-body text-right leading-tight">
              <a
                href="tel:+64272028687"
                className="text-sensei-dark hover:text-sensei-blue transition-colors duration-200"
              >
                027 202 8687
              </a>
              <a
                href="mailto:barney@senseisqueegee.co.nz"
                className="text-sensei-dark hover:text-sensei-blue transition-colors duration-200"
              >
                barney@senseisqueegee.co.nz
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        ></div>
      )}

      {/* Slide-Out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="font-heading text-lg text-sensei-dark">Menu</span>
          <button onClick={handleClose} aria-label="Close menu">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col gap-3 justify-center mb-6">
            <CTAButton className="w-auto text-center">Request a Free Quote</CTAButton>
            <a
              href="tel:+64272028687"
              className="inline-block px-6 py-3 bg-sensei-dark text-white rounded-xl font-body text-sm shadow hover:bg-sensei-blue transition-colors duration-200 text-center"
            >
              027 202 8687
            </a>
            <a
              href="mailto:barney@senseisqueegee.co.nz"
              className="inline-block px-6 py-3 bg-sensei-dark text-white rounded-xl font-body text-sm shadow hover:bg-sensei-blue transition-colors duration-200 text-center"
            >
              barney@senseisqueegee.co.nz
            </a>
          </div>

          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={handleClose}
                  className="block text-lg font-body text-sensei-dark hover:text-sensei-blue py-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* TODO: Add social links (Facebook / Instagram) here once accounts exist */}
      </div>
    </>
  );
}
