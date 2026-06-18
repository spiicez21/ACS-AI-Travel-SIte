import React, { useState, useEffect } from 'react';

const ContactUs: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [buttonState, setButtonState] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    // Add custom CSS
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .contact-shadow { box-shadow: 0 10px 40px rgba(0, 54, 98, 0.05); }
      .input-focus:focus { border-color: #1000bc; ring-color: #1000bc; }
      .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
      .accordion-item.active .accordion-content { max-height: 200px; }
      .accordion-item.active .accordion-icon { transform: rotate(180deg); }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setButtonState('sending');
    setTimeout(() => {
      setButtonState('sent');
      setTimeout(() => {
        setButtonState('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <main className="pt-40">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
        <div className="max-w-3xl">
          <h1 className="font-display-xl text-display-xl text-primary mb-8">Contact Our Curators.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Whether you're seeking a bespoke itinerary or have a question about our editorial guides, our team is here to provide precision in your travel journey.</p>
        </div>
      </section>

      {/* Contact Form & Socials Grid */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-12 rounded-xl contact-shadow">
          <form className="space-y-8" id="contactForm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">Full Name</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md text-body-md input-focus outline-none focus:ring-1 focus:ring-primary" id="name" name="name" placeholder="E.g. Julian Vane" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md text-body-md input-focus outline-none focus:ring-1 focus:ring-primary" id="email" name="email" placeholder="julian@luxury.travel" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">Your Inquiry</label>
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md text-body-md input-focus outline-none focus:ring-1 focus:ring-primary" id="message" name="message" placeholder="Describe the journey you envision..." rows={6}></textarea>
            </div>
            <button 
              className={`w-full md:w-auto text-on-primary px-12 py-4 rounded-full font-label-md text-label-md font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20 ${buttonState === 'sent' ? 'bg-green-600' : 'bg-primary'}`} 
              type="submit"
              disabled={buttonState !== 'idle'}
            >
              {buttonState === 'idle' && 'Send Message'}
              {buttonState === 'sending' && 'Sending...'}
              {buttonState === 'sent' && 'Message Sent'}
            </button>
          </form>
        </div>

        {/* Right: Connect & Details */}
        <div className="lg:col-span-5 space-y-12 lg:pl-12">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Connect</h3>
            <div className="space-y-4">
              <a className="flex items-center space-x-4 text-on-surface-variant hover:text-primary transition-colors" href="mailto:hello@thisai.travel">
                <span className="material-symbols-outlined">mail</span>
                <span className="font-body-md text-body-md">hello@thisai.travel</span>
              </a>
              <a className="flex items-center space-x-4 text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
                <span className="font-body-md text-body-md">Global HQ: London, W1</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Socials</h3>
            <div className="grid grid-cols-2 gap-4">
              <a className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:border-primary transition-all group" href="#">
                <span className="font-label-md text-label-md">Instagram</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
              <a className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:border-primary transition-all group" href="#">
                <span className="font-label-md text-label-md">LinkedIn</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
              <a className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:border-primary transition-all group" href="#">
                <span className="font-label-md text-label-md">Threads</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
              <a className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:border-primary transition-all group" href="#">
                <span className="font-label-md text-label-md">Pinterest</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-64 contact-shadow bg-gray-200">
            <div className="w-full h-full object-cover"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-4">
            <h2 className="font-display-lg text-display-lg text-primary mb-4">Common Enquiries.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Instant answers to our most frequent concierge questions.</p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {/* Accordion Item 1 */}
            <div className={`accordion-item bg-surface-container-lowest rounded-lg border border-outline-variant transition-all hover:border-primary ${activeAccordion === 0 ? 'active' : ''}`}>
              <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => toggleAccordion(0)}>
                <span className="font-headline-md text-headline-md text-on-surface">How do I start a bespoke journey planning?</span>
                <span className="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
              </button>
              <div className="accordion-content px-6 pb-6">
                <p className="font-body-md text-body-md text-on-surface-variant">Simply click the "Start Journey" button in our navigation or send us an inquiry via the form above. A lead curator will contact you within 24 hours to begin the consultation process.</p>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className={`accordion-item bg-surface-container-lowest rounded-lg border border-outline-variant transition-all hover:border-primary ${activeAccordion === 1 ? 'active' : ''}`}>
              <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => toggleAccordion(1)}>
                <span className="font-headline-md text-headline-md text-on-surface">Are the travel guides updated seasonally?</span>
                <span className="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
              </button>
              <div className="accordion-content px-6 pb-6">
                <p className="font-body-md text-body-md text-on-surface-variant">Yes, our editorial team audits all destination guides quarterly to ensure restaurant recommendations and experience listings remain at the peak of relevance and quality.</p>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className={`accordion-item bg-surface-container-lowest rounded-lg border border-outline-variant transition-all hover:border-primary ${activeAccordion === 2 ? 'active' : ''}`}>
              <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => toggleAccordion(2)}>
                <span className="font-headline-md text-headline-md text-on-surface">Do you offer 24/7 on-trip support?</span>
                <span className="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
              </button>
              <div className="accordion-content px-6 pb-6">
                <p className="font-body-md text-body-md text-on-surface-variant">For all clients traveling on our curated bespoke itineraries, we provide a dedicated concierge line available 24/7 for any urgent adjustments or requests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
        <div className="relative bg-primary text-on-primary p-12 md:p-24 rounded-3xl overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary/60 mb-4 block">Newsletter</span>
            <h2 className="font-display-lg text-display-lg mb-8 leading-tight">Curated insights, delivered with precision.</h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-12">Join 12,000+ travel aficionados who receive our weekly editorial brief on the world's most refined destinations.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-full px-8 py-4 flex-grow focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Your email address" type="email" />
              <button className="bg-white text-primary px-10 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-secondary-fixed transition-all">Subscribe</button>
            </form>
          </div>
          {/* Subtle background element */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined" style={{ fontSize: '500px', transform: 'translate(30%, -20%) rotate(-15deg)' }}>explore</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
