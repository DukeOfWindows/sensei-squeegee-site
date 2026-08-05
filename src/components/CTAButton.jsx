import React from 'react';
import { Link } from 'react-router-dom';

export default function CTAButton({
  href = "/contact",
  children = "Request a Free Quote",
  className = "",
  ariaLabel = "Request a free quote",
}) {
  const baseClasses =
    "inline-block bg-belt-red hover:bg-sensei-dark text-white font-heading py-3 px-6 rounded-lg text-lg tracking-wide transition";

  return href.startsWith("/") ? (
    <Link to={href} className={`${baseClasses} ${className}`} aria-label={ariaLabel}>
      {children}
    </Link>
  ) : (
    <a href={href} className={`${baseClasses} ${className}`} aria-label={ariaLabel} role="button">
      {children}
    </a>
  );
}
