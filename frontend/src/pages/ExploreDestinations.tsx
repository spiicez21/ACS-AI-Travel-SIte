import React from 'react';
import { Link } from 'react-router-dom';

const ExploreDestinations: React.FC = () => {
  return (
    <main className="pt-32 pb-section-gap">
      {/* Hero Section */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="max-w-3xl">
          <h1 className="font-display-xl text-display-xl text-primary mb-4">Where to next?</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Curated trajectories for the discerning traveler. Precise, editorial, and effortless.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-16 sticky top-24 z-40">
        <div className="editorial-shadow bg-surface-container-lowest p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-grow w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">explore</span>
            <input
              className="w-full pl-12 pr-4 py-4 rounded-xl border-outline-variant focus:border-primary focus:ring-0 font-body-md text-body-md bg-transparent"
              placeholder="Region, City, or Specific Vibe..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-3 pt-1 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <button className="whitespace-nowrap px-4 py-2 rounded-full border border-primary bg-primary-fixed text-primary font-label-md text-label-md">All Regions</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant hover:border-primary transition-colors font-label-md text-label-md text-on-surface-variant">Europe</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant hover:border-primary transition-colors font-label-md text-label-md text-on-surface-variant">Asia</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant hover:border-primary transition-colors font-label-md text-label-md text-on-surface-variant">Americas</button>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant mx-2 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant hover:border-primary transition-colors font-label-md text-label-md text-on-surface-variant">Luxury</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant hover:border-primary transition-colors font-label-md text-label-md text-on-surface-variant">Adventure</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant hover:border-primary transition-colors font-label-md text-label-md text-on-surface-variant">Price: $$</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section (Bento Highlight) */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <div className="lg:col-span-2 relative group overflow-hidden rounded-[20px] aspect-[16/9] editorial-shadow">
            <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=1000" alt="Positano, Italy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 text-white">
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/30 backdrop-blur-md border border-white/20 font-label-sm text-label-sm uppercase tracking-widest">Trending Now</div>
              <h2 className="font-display-lg text-display-lg mb-2">Positano Precision</h2>
              <p className="font-body-lg text-body-lg text-white/80 max-w-md mb-6">Experience the Italian Riviera with unmatched stylistic clarity. Curated itineraries for the modern aestheticist.</p>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-label-md text-label-md hover:shadow-xl transition-all active:scale-95">Explore Coastline</button>
            </div>
          </div>
          <div className="flex flex-col gap-gutter">
            <div className="bg-primary-container p-10 rounded-[20px] flex-grow flex flex-col justify-center items-start text-on-primary-container editorial-shadow">
              <span className="material-symbols-outlined text-5xl mb-6">auto_awesome</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">Not sure?</h3>
              <p className="font-body-md text-body-md mb-8 opacity-80">Our AI engine analyzes your aesthetic preferences to curate the perfect path.</p>
              <Link to="/plan" className="w-full">
                <button className="bg-white text-primary px-6 py-3 rounded-full font-label-md text-label-md w-full hover:bg-surface transition-colors">Let AI Decide</button>
              </Link>
            </div>
            <div className="bg-white p-10 rounded-[20px] border border-outline-variant flex-grow editorial-shadow">
              <h4 className="font-label-sm text-label-sm uppercase text-outline mb-4">Latest Dispatch</h4>
              <p className="font-headline-md text-headline-md text-primary leading-tight">"The minimalist's guide to Kyoto’s hidden tea houses."</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container"></div>
                <span className="font-label-md text-label-md text-on-surface">By Elena Vance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Current Trajectories</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A collection of precision-selected global destinations.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { name: "Agra", price: "$$$", tags: "India · Architecture", experiences: 8, img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000" },
            { name: "London", price: "$$$$", tags: "UK · Metropolitan", experiences: 15, img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000" },
            { name: "Vik", price: "$$", tags: "Iceland · Adventure", experiences: 5, img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=1000" },
            { name: "Oia", price: "$$$$", tags: "Greece · Serenity", experiences: 12, img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?auto=format&fit=crop&q=80&w=1000" },
            { name: "Ubud", price: "$$", tags: "Bali · Wellness", experiences: 22, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000" },
            { name: "Kyoto", price: "$$$", tags: "Japan · Tradition", experiences: 18, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000" },
            { name: "Paris", price: "$$$$", tags: "France · Elegance", experiences: 30, img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000" },
            { name: "Zermatt", price: "$$$$$", tags: "Switzerland · Alpine", experiences: 10, img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=1000" }
          ].map((dest) => (
            <Link to={`/destination/${dest.name.toLowerCase()}`} key={dest.name} className="group relative flex flex-col bg-white rounded-[20px] overflow-hidden editorial-shadow transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-headline-md text-primary">{dest.name}</h3>
                  <span className="font-label-md text-label-md text-secondary">{dest.price}</span>
                </div>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-4">{dest.tags}</p>
                <div className="h-[1px] w-full bg-outline-variant mb-4"></div>
                <div className="flex items-center justify-between transition-colors duration-300">
                  <span className="font-label-md text-label-md text-outline group-hover:text-on-surface transition-colors">{dest.experiences} Experiences</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">add_circle</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-section-gap px-margin-desktop max-w-container-max mx-auto">
        <div className="cta-gradient rounded-[32px] p-16 md:p-24 text-center text-on-primary editorial-shadow relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
          </div>
          <h2 className="font-display-lg text-display-lg mb-6 relative z-10">Your path is personal.</h2>
          <p className="font-body-lg text-body-lg mb-10 opacity-80 max-w-2xl mx-auto relative z-10">
            Stop browsing and start experiencing. Our AI concierge constructs trajectories based on your unique stylistic DNA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <Link to="/plan">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-label-md text-label-md hover:shadow-2xl transition-all active:scale-95">Let AI Decide</button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all">Speak to an Expert</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreDestinations;
