// Combined service page: interior + exterior residential window cleaning.
// This is the only service Sensei Squeegee offers — keep it that way.
import React from 'react';
import HelmetSEO from '../components/HelmetSEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import BenefitCards from '../components/BenefitCards';
import ToolboxSection from '../components/ToolboxSection';
import HowItWorks from '../components/HowItWorks';
import FAQSection from '../components/FAQSection';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';
import allTestimonials from '../data/testimonialsData';

// TODO: All images below are placeholders from the layout template — replace with real
// Sensei Squeegee photos once supplied. Keep filenames lowercase-with-hyphens.
import heroWindow from '../images/exterior-window-cleaning.webp';
import exteriorImg from '../images/window-cleaning-before-after.webp';
import interiorImg from '../images/interior-window-cleaning.webp';
import purewaterImg from '../images/tools/pure-water-system-window-cleaning.webp';
import squeegeeImg from '../images/tools/residential-squeegee-tool.webp';
import poleImg from '../images/tools/reach-pole-glass-cleaning.webp';
import windowIcon from '../images/icons/window.png';
import sunIcon from '../images/icons/sun.png';
import houseIcon from '../images/icons/house.png';

export default function WindowCleaning() {
  const faqItems = [
    {
      question: 'How often should I have my windows cleaned?',
      answer: (
        <>
          For most homes, <strong>an exterior clean every 3 months or so</strong> keeps the glass
          looking sharp year-round. Interior windows can usually go longer —{' '}
          <strong>every 3–6 months</strong> depending on pets, kids, and what happens in the
          kitchen.
        </>
      ),
    },
    {
      question: 'Do I need to be home for the clean?',
      answer: (
        <>
          <strong>Only if we&rsquo;re doing the inside.</strong> For exterior cleans, as long as we
          have access, you can carry on with your day.
        </>
      ),
    },
    {
      question: 'Do I need to move furniture or blinds for an interior clean?',
      answer: (
        <>
          We&rsquo;ll work around most things, but it helps if you{' '}
          <strong>pull back curtains and move fragile items</strong> off windowsills. If
          something&rsquo;s tricky, we&rsquo;ll give you a hand.
        </>
      ),
    },
    {
      question: 'What happens if it rains on the day of my booking?',
      answer: (
        <>
          Light rain isn&rsquo;t a problem, but <strong>we&rsquo;ll reschedule if the
          weather&rsquo;s really rough</strong>. Clean windows + rain won&rsquo;t leave spots —
          dirty windows + rain will!
        </>
      ),
    },
    {
      question: 'Will you remove paint, stickers, or hard water stains?',
      answer: (
        <>
          Standard window cleans don&rsquo;t include stubborn residue removal, but{' '}
          <strong>we can quote for extra work</strong> like paint overspray, hard-water stains, or
          decal removal. {/* TODO: confirm this is a service he wants to offer */}
        </>
      ),
    },
    {
      question: 'What are your payment terms?',
      answer: (
        <>
          The job is <strong>invoiced and payment is due upon completion</strong>. You can pay by{' '}
          <strong>bank transfer, EFTPOS, or cash</strong> — whichever works best for you.
        </>
      ),
    },
  ];

  return (
    <>
      <HelmetSEO
        pageTitle="Window Cleaning Hamilton | Interior & Exterior | Sensei Squeegee"
        metaDescription="Interior and exterior residential window cleaning, servicing Ngāruawāhia to Te Awamutu. Streak-free results from your local window cleaning sensei."
        canonicalUrl="https://senseisqueegee.co.nz/window-cleaning"
      />

      <Navbar />
      <main>
        <Hero
          backgroundImage={heroWindow}
          eyebrow="Residential"
          title="Window Cleaning, Inside & Out"
          description="From shabby to shiny — interior and exterior window cleaning for homes in Hamilton."
        />

        <Info
          image={exteriorImg}
          imageAlt="Exterior window cleaning before and after (placeholder image)"
          heading="Exterior Window Cleaning"
          paragraphs={[
            'The outside of your windows takes the full force of Waikato weather — rain spots, dust, pollen, and the occasional confused bird.',
            'Getting a streak-free finish is part art, part science: the right tools, sound technique, and the patience to do it properly. That’s where the sensei part comes in.',
            'Every exterior clean covers the glass, and we wipe down frames and sills while we’re there.',
          ]}
          listIntro="An exterior clean includes:"
          listItems={[
            'Exterior glass cleaned to a streak-free finish',
            'Frames and sills wiped down',
            'Cobweb removal around window frames',
            // TODO: confirm any extras with brother (deck glass/balustrades, skylights, etc.)
          ]}
        />

        <Info
          image={interiorImg}
          imageAlt="Interior window cleaning (placeholder image)"
          heading="Interior Window Cleaning"
          reverse
          paragraphs={[
            'Fingerprints, smudges, and dust don’t stand a chance. Inside, we swap power for precision — careful, tidy work around your furniture, curtains, and delicate surfaces.',
            'Discipline matters indoors: drop cloths down, drips caught, everything left exactly as we found it. Dojo rules apply in your home too.',
            'Your view deserves to look good from both sides of the glass.',
          ]}
          listIntro="An interior clean includes:"
          listItems={[
            'Interior window panes cleaned by hand',
            'Track and sill detailing',
            'High and hard-to-reach windows',
            'No drips, streaks, or residue left behind',
          ]}
        />

        <BenefitCards
          heading="What Clean Windows Fix"
          benefits={[
            { icon: windowIcon, alt: 'Window icon', text: 'Helps protect your glass from long-term water staining and build-up' },
            { icon: sunIcon, alt: 'Sun icon', text: 'Lets more natural light pour into your home' },
            { icon: houseIcon, alt: 'House icon', text: 'Sharper-looking windows and better street appeal' },
          ]}
        />

        {/* TODO: Photos are placeholders from the layout template — brother will swap in his own
            photos later. Keep filenames lowercase-with-hyphens when replacing. */}
        <ToolboxSection
          title="Tools of the Trade"
          subtitle="Not your neighbour's hose and newspaper trick."
          items={[
            {
              image: purewaterImg,
              alt: 'Pure water cleaning system (placeholder image)',
              title: 'Pure Water Cleaning System',
              description:
                'Our deionised water system filters out all minerals and impurities — down to the microscopic level. The result? Spotless, streak-free windows that dry naturally without a single mark. No soaps, no chemicals — just science.',
            },
            {
              image: squeegeeImg,
              alt: 'Professional window squeegee (placeholder image)',
              title: 'Professional Squeegees',
              description:
                'On our belts: a full toolkit of commercial-grade squeegees, scrubbers, and detailing gear. In our hands: lightning-fast technique. We combine precision, speed, and elbow grease to leave every window crystal clear, inside and out.',
            },
            {
              image: poleImg,
              alt: 'Telescopic pole for high windows (placeholder image)',
              title: 'Telescopic Poles',
              description:
                'Our lightweight, indoor-friendly poles reach high windows and skylights without leaning ladders on your walls or squeezing into tight corners.',
            },
          ]}
        />

        {/* Renders nothing until real testimonials exist */}
        <TestimonialSlider testimonials={allTestimonials} />

        <HowItWorks />
        <FAQSection faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
