import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      navigate('/plan', { state: { destination } });
    } else {
      navigate('/search');
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src="/Assets/Hero/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-0 max-w-4xl">
          <h1 className="font-display-xl text-display-xl text-white mb-8 drop-shadow-[1px_4px_8px_rgba(0,0,0,1)]   ">
            Find Your Direction
          </h1>
          <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm p-2 rounded-2xl editorial-shadow flex flex-col md:flex-row items-stretch gap-2 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-outline-variant">
              <span className="material-symbols-outlined text-outline mr-2">explore</span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full py-3 font-body-md text-on-surface outline-none"
                placeholder="Where do you want to wander?"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-primary text-on-primary px-8 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-95 transition-all w-full md:w-auto min-h-[48px] shrink-0">
              <span>Ask AI Guide</span>
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
            </button>
          </form>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <p className="text-center font-label-sm text-label-sm text-outline uppercase tracking-[0.2em] mb-12">
            The World's Finest Partners
          </p>
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="font-display-lg text-headline-md font-bold">AMAN</span>
            <span className="font-display-lg text-headline-md font-bold">BELMOND</span>
            <span className="font-display-lg text-headline-md font-bold">FOUR SEASONS</span>
            <span className="font-display-lg text-headline-md font-bold">ROSEWOOD</span>
            <span className="font-display-lg text-headline-md font-bold">SIX SENSES</span>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-end mb-section-gap">
          <div>
            <h2 className="font-display-lg text-display-lg text-primary mb-4">Curated Escapes</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Precision-selected destinations where luxury meets local authenticity.
            </p>
          </div>
          <Link to="/destinations" className="text-primary font-label-md text-label-md flex items-center gap-2 group">
            View All Destinations
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Card 1 */}
          <Link to="/destination/kyoto" className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000" alt="Kyoto, Japan" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Kyoto, Japan</h3>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Zen Philosophy</p>
          </Link>
          {/* Card 2 */}
          <Link to="/destination/venice" className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=1000" alt="Venice, Italy" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Venice, Italy</h3>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Floating Heritage</p>
          </Link>
          {/* Card 3 */}
          <Link to="/destination/agra" className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000" alt="Agra, India" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Agra, India</h3>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Architectural Poetry</p>
          </Link>
          {/* Card 4 */}
          <Link to="/destination/yosemite" className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1000" alt="Yosemite, USA" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Yosemite, USA</h3>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Nature's Cathedral</p>
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap">
        <div className="cta-gradient rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6">Your next story begins here.</h2>
            <p className="font-body-lg text-body-md md:text-body-lg mb-8 md:mb-12 opacity-90 max-w-xl mx-auto">
              Join the elite world of travel planned with editorial precision and atmospheric intelligence.
            </p>
            <Link to="/plan">
              <button className="bg-white text-primary px-8 md:px-12 py-4 md:py-5 rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-all shadow-xl">
                Start Your Journey
              </button>
            </Link>
          </div>
          {/* Abstract decorative SVG */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <svg fill="none" height="400" viewBox="0 0 400 400" width="400" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="199.5" stroke="white"></circle>
              <circle cx="200" cy="200" r="150" stroke="white"></circle>
              <circle cx="200" cy="200" r="100" stroke="white"></circle>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
