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
            {/* Future routes will be added here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
