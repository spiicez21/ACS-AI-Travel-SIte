import React from 'react';
import { Link } from 'react-router-dom';

const DestinationDetails: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-200"></div> {/* Placeholder for image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end px-margin-desktop pb-24 max-w-container-max mx-auto">
          <span className="font-label-sm text-label-sm text-on-primary uppercase tracking-[0.2em] mb-4">Honshu Island, Japan</span>
          <h1 className="font-display-xl text-display-xl text-on-primary max-w-4xl">Kyoto: The Timeless Heart of Japan</h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 mt-6 max-w-2xl leading-relaxed">
            Step into a living masterpiece where thousand-year-old temples coexist with avant-garde tea houses.
          </p>
        </div>
      </header>

      {/* Editorial Section */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-5">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">The Silent Architecture of Zen</h2>
          <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>
              Kyoto is not merely a destination; it is a ritual. For over a millennium, it served as the imperial capital of Japan, a sanctuary where the arts of the kimono, the tea ceremony, and the rock garden were perfected. To walk through the Gion district at twilight is to witness the seamless folding of time.
            </p>
            <p>
              Unlike the neon-drenched kinetic energy of Tokyo, Kyoto moves with the deliberate pace of a brush stroke. It is a city defined by its silences—the soft crunch of gravel in a Daitoku-ji temple garden, the rustle of silk in a Pontocho alley, and the steam rising from a bowl of matcha.
            </p>
          </div>
        </div>
        <div className="md:col-start-7 md:col-span-6">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden editorial-shadow">
            <div className="w-full h-full bg-gray-200 object-cover"></div>
          </div>
        </div>
      </section>

      {/* Must See Bento Grid */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Curated Map</span>
              <h2 className="font-headline-lg text-headline-lg mt-4">Essential Destinations</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              A precision-curated selection of the most culturally significant landmarks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl editorial-shadow">
              <div className="absolute inset-0 bg-gray-300 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-on-primary">
                <h3 className="font-headline-md text-headline-md">Fushimi Inari-taisha</h3>
                <p className="font-label-md text-label-md opacity-80 mt-2">The Path of Ten Thousand Gates</p>
              </div>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl editorial-shadow">
              <div className="absolute inset-0 bg-gray-300 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-on-primary">
                <h3 className="font-headline-md text-headline-md">Kinkaku-ji</h3>
                <p className="font-label-md text-label-md opacity-80 mt-2">The Zen Golden Pavilion</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl editorial-shadow">
              <div className="absolute inset-0 bg-gray-300 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <h4 className="font-label-md text-label-md font-bold">Arashiyama</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl editorial-shadow">
              <div className="absolute inset-0 bg-gray-300 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <h4 className="font-label-md text-label-md font-bold">Gion District</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Best Time to Visit</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The cherry blossoms of **Late March** and the fiery maples of **November** are peak experiences. For a quieter, meditative journey, the snow-dusted temples of **January** offer unparalleled solitude.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary">domino_mask</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Cultural Etiquette</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Precision in social interaction is key. Speak softly in temples, always remove shoes when entering tatami spaces, and respect the privacy of Geiko in Gion by observing from a distance.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary">local_cafe</span>
            </div>
            <h3 className="font-headline-md text-headline-md">The Rituals</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engage with a private tea master in the Higashiyama hills or take part in a Zazen meditation session. Kyoto is best understood through participation, not just observation.
            </p>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
        <Link to="/plan">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-label-md text-label-md hover:scale-105 transition-all group">
            <span>Plan a trip here</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default DestinationDetails;
