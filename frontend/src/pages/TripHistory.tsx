import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { MapPin, Calendar, Wallet, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

interface Journey {
  id: number;
  destination: string;
  duration: number;
  budget: string;
  companions: string;
  created_at: string;
}

const TripHistory: React.FC = () => {
  const { token, isAuthenticated } = useAuth();
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }

    const fetchHistory = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/journeys/history`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch history');
        }

        const data = await response.json();
        setJourneys(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [token, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center text-center bg-surface text-on-surface">
        <h2 className="font-display-md text-headline-lg text-primary mb-4">Please log in to view your trip history</h2>
        <Link to="/login" className="px-8 py-3 bg-primary text-on-primary rounded-full font-label-md text-label-md font-bold hover:opacity-90 transition-all active:scale-95 shadow-sm">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-12 bg-surface text-on-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h1 className="font-display-xl text-display-md text-primary mb-2">Your Journeys</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Review your past generated itineraries and plans.</p>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-zinc-800 border-t-white rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 text-red-400 p-6 rounded-2xl border border-red-500/20">
            {error}
          </div>
        ) : journeys.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-lowest/50 rounded-3xl border border-outline-variant">
            <MapPin className="w-16 h-16 mx-auto text-primary mb-4" />
            <h3 className="font-display-sm text-headline-sm text-primary mb-2">No trips generated yet</h3>
            <p className="text-on-surface-variant mb-6 font-body-md text-body-md">Start planning your next adventure to see it here.</p>
            <Link to="/plan" className="inline-block px-8 py-3 bg-primary text-on-primary font-label-md text-label-md font-bold rounded-full hover:opacity-90 transition-all active:scale-95 shadow-sm">
              Plan a Journey
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeys.map((journey) => (
              <Link 
                key={journey.id} 
                to={`/summary?id=${journey.id}`}
                className="group glass-card bg-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant rounded-[2rem] p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 block relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-primary/20 transition-colors"></div>
                
                <h3 className="font-display-sm text-headline-sm text-primary mb-4 flex items-center justify-between">
                  {journey.destination}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
                
                <div className="space-y-3 text-on-surface-variant font-body-md text-body-md">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{journey.duration} Days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wallet className="w-4 h-4 text-primary" />
                    <span className="capitalize">{journey.budget} Budget</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{journey.companions}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-outline-variant/50 text-xs text-outline font-body-sm flex justify-between items-center">
                  <span>Generated on {new Date(journey.created_at).toLocaleDateString()}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TripHistory;
