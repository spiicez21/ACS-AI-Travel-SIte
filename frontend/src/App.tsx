import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExploreDestinations from './pages/ExploreDestinations';
import DestinationDetails from './pages/DestinationDetails';
import PlanYourJourney from './pages/PlanYourJourney';
import GeneratingJourney from './pages/GeneratingJourney';
import YourItinerary from './pages/YourItinerary';
import TripSummary from './pages/TripSummary';
import BudgetBreakdown from './pages/BudgetBreakdown';
import BudgetEmptyState from './pages/BudgetEmptyState';
import SearchActive from './pages/SearchActive';
import NavigationOverlay from './pages/NavigationOverlay';
import DatePickerActive from './pages/DatePickerActive';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<ExploreDestinations />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/plan" element={<PlanYourJourney />} />
            <Route path="/generating" element={<GeneratingJourney />} />
            <Route path="/itinerary" element={<YourItinerary />} />
            <Route path="/summary" element={<TripSummary />} />
            <Route path="/budget" element={<BudgetBreakdown />} />
            <Route path="/budget-empty" element={<BudgetEmptyState />} />
            <Route path="/search" element={<SearchActive />} />
            <Route path="/navigation" element={<NavigationOverlay />} />
            <Route path="/date-picker" element={<DatePickerActive />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Future routes will be added here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
