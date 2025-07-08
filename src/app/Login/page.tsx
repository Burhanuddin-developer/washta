"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Role = 'admin' | 'agent' | 'seller';

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Agent', value: 'agent' },
  { label: 'Seller', value: 'seller' },
];

const accounts = [
  { role: 'admin', email: 'admin1@washta.com', password: 'adminpass1' },
  { role: 'admin', email: 'admin2@washta.com', password: 'adminpass2' },
  { role: 'admin', email: 'admin3@washta.com', password: 'adminpass3' },
  { role: 'agent', email: 'agent1@washta.com', password: 'agentpass1' },
  { role: 'agent', email: 'agent2@washta.com', password: 'agentpass2' },
  { role: 'agent', email: 'agent3@washta.com', password: 'agentpass3' },
  { role: 'seller', email: 'seller1@washta.com', password: 'sellerpass1' },
  { role: 'seller', email: 'seller2@washta.com', password: 'sellerpass2' },
  { role: 'seller', email: 'seller3@washta.com', password: 'sellerpass3' },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    const account = accounts.find(acc => acc.email === email && acc.password === password);
    if (!account) {
      setError('Invalid email or password.');
      return;
    }
    setError('');
    localStorage.setItem('role', account.role);
    localStorage.setItem('email', email);
    router.push(`/Dashboard?role=${account.role}&email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white to-[#e6eaff]">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Illustration */}
        <div className="md:w-1/2 flex items-center justify-center bg-[#f5f6fa] p-8">
          <img src="/asset/images/Washta.png" alt="Login Illustration" className="w-80" />
        </div>
        {/* Login Form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-[#6c63ff]">Welcome back!</h2>
          <p className="text-gray-500 mb-6">Log into your account</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="johndoe@example.com"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full py-2 bg-[#6c63ff] text-white rounded font-semibold hover:bg-[#5548c8] transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
