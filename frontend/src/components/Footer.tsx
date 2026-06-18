import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div>
          <div className="font-display-md text-headline-md font-bold text-primary mb-8">THISAI</div>
          <p className="text-on-surface-variant font-body-md mb-8">
            Editorial Precision in Travel. We curate paths for those who seek clarity in the complex.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">language</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">share</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">mail</span>
          </div>
        </div>
        <div className="md:pl-12">
          <h6 className="font-label-sm text-label-sm text-primary uppercase mb-8">Ecosystem</h6>
          <ul className="space-y-4">
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/destinations">
                Destinations
              </Link>
            </li>
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/plan">
                Planner
              </Link>
            </li>
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/itinerary">
                Experiences
              </Link>
            </li>
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/contact">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-label-sm text-label-sm text-primary uppercase mb-8">Resources</h6>
          <ul className="space-y-4">
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/guides">
                Travel Guides
              </Link>
            </li>
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/press">
                Press Kits
              </Link>
            </li>
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/contact">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-label-sm text-label-sm text-primary uppercase mb-8">Legal</h6>
          <ul className="space-y-4">
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/terms">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant/30 text-center">
        <p className="font-label-sm text-label-sm text-outline">© 2024 THISAI. Editorial Precision in Travel.</p>
      </div>
    </footer>
  );
};

export default Footer;
