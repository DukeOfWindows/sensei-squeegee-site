import React, { useState } from 'react';

const BASIN_ENDPOINT = 'https://usebasin.com/f/ceb092f440ab';
const THANKS_REDIRECT = 'https://senseisqueegee.co.nz/thanks';

export default function ContactForm() {
  const [filePreviews, setFilePreviews] = useState([]);

  const handleFilePreview = (e) => {
    const files = Array.from(e.target.files);
    setFilePreviews(files);
  };

  const removeFile = (indexToRemove) => {
    setFilePreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <form
      action={BASIN_ENDPOINT}
      method="POST"
      encType="multipart/form-data"
      acceptCharset="UTF-8"
      className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-2xl mx-auto"
      id="quote"
    >
      <h2 className="text-3xl font-heading font-bold text-sensei-dark text-center mb-2">
        Request a Free Quote
      </h2>
      <p className="text-center text-gray-600 text-sm mb-4">
        Tell us about your windows — interior, exterior, or the full kata (both) — and
        we&rsquo;ll get back to you with a free quote.
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

      {/* File Upload */}
      <label className="block text-sm font-medium text-gray-700">
        Upload Photos (optional)
        <input
          type="file"
          name="attachments[]"
          multiple
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFilePreview}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sensei-blue"
        />
        <p className="text-xs text-gray-500 mt-1">Accepted: JPG, PNG, PDF. Max 5MB each.</p>
      </label>

      {/* File Previews */}
      {filePreviews.length > 0 && (
        <div className="mt-4 space-y-2">
          {filePreviews.map((file, index) => (
            <div key={index} className="text-sm text-gray-700 flex items-center gap-4">
              {file.type.startsWith('image/') && (
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="w-16 h-16 object-cover rounded border"
                />
              )}
              <span className="flex-1 break-words">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-belt-red text-xs font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Hidden Fields */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <input type="hidden" name="_redirect" value={THANKS_REDIRECT} />

      {/* Submit */}
      <button
        type="submit"
        className="bg-belt-red text-white font-semibold px-6 py-3 rounded-md hover:bg-sensei-dark transition-colors w-full"
      >
        Send Request
      </button>
    </form>
  );
}
