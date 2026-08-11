import React from 'react';
import { Helmet } from 'react-helmet';

// TODO: LocalBusiness structured data was deliberately removed — re-add it here once the
// remaining business details exist (opening hours, Google Business Profile, socials).

export default function HelmetSEO({
  pageTitle,
  metaDescription,
  canonicalUrl,
  image, // optional og:image URL — TODO: set once a real logo/photo is hosted
}) {
  return (
    <Helmet>
      {/* Core SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
}
