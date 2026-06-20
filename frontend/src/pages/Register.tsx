import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      login(data.token, data.user);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 flex items-center justify-center relative overflow-hidden bg-surface">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="glass-card bg-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <h2 className="font-display-md text-headline-lg text-primary mb-6 text-center">Create Account</h2>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-primary font-label-md text-label-md uppercase tracking-widest mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-primary font-label-md text-label-md uppercase tracking-widest mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-primary font-label-md text-label-md uppercase tracking-widest mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-label-md text-label-md font-bold py-3.5 rounded-full hover:opacity-90 transition-all mt-6 shadow-md active:scale-95"
            >
              Sign Up
            </button>
          </form>

          <p className="text-on-surface-variant text-center mt-8 font-body-sm text-body-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:text-primary/80 transition-colors font-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
