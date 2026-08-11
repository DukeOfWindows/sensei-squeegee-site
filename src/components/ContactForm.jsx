import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Basin free plan ignores the `_redirect` field (custom redirects are paid), so we
// submit via fetch() with `Accept: application/json` and redirect client-side instead.
const BASIN_ENDPOINT = 'https://usebasin.com/f/ceb092f440ab';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return; // belt-and-braces against double submits
    setSubmitting(true);
    setError(false);

    try {
      const formData = new FormData(e.target);
      const res = await fetch(BASIN_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' }, // Basin responds with JSON instead of redirecting
        body: formData,
      });

      if (res.ok) {
        navigate('/thanks');
      } else {
        setError(true);
        setSubmitting(false);
      }
    } catch {
      // Network error / offline
      setError(true);
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-2xl mx-auto"
      id="quote"
    >
      <h2 className="text-3xl font-heading font-bold text-sensei-dark text-center mb-2">
        Request a Free Quote
      </h2>
      <p className="text-center text-gray-600 text-sm mb-4">
        Tell us about your windows — interior, exterior, or both — and we&rsquo;ll get back to
        you with a free quote.
      </p>

      {/* Form Fields */}
      <label className="block text-sm font-medium text-gray-700">
        Name
        <input type="text" name="name" required className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sensei-blue" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Email
        <input type="email" name="email" required className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sensei-blue" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Address
        <input type="text" name="address" required className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sensei-blue" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Phone Number
        <input type="tel" name="phone" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sensei-blue" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        What would you like cleaned?
        <select name="service" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sensei-blue bg-white">
          <option value="exterior">Exterior windows</option>
          <option value="interior">Interior windows</option>
          <option value="both">Both — inside and out</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Message
        <textarea name="message" required rows="4" placeholder="Roughly how many windows? Single or two-storey? Anything tricky?" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sensei-blue" />
      </label>

      {/* Honeypot — hidden from humans, Basin uses it for spam filtering */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      {/* Inline error with phone fallback */}
      {error && (
        <div
          role="alert"
          className="bg-red-50 border border-belt-red text-belt-red rounded-md px-4 py-3 text-sm"
        >
          Sorry — something went wrong sending your request. Please try again in a moment, or
          call us directly on{' '}
          <a href="tel:+64272028687" className="font-semibold underline">
            027 202 8687
          </a>.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="bg-belt-red text-white font-semibold px-6 py-3 rounded-md hover:bg-sensei-dark transition-colors w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Send Request'}
      </button>
    </form>
  );
}
