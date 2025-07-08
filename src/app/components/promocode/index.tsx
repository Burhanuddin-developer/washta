"use client";
import { useState } from 'react';

export default function PromoCode() {
  const [specificCustomer, setSpecificCustomer] = useState(false);
  const [promoType, setPromoType] = useState('Amount (AED)');
  const [code, setCode] = useState('Washta15');
  const [discount, setDiscount] = useState('15.00');
  const [status, setStatus] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <div className="min-h-screen bg-[#f6f7ff] flex flex-col p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-4 w-full">
        <h1 className="text-2xl font-medium text-gray-800 sm:ml-6 w-full text-center sm:text-left">Promo Code</h1>
        <div className="flex items-center gap-2 w-full">
          <span className="text-sm font-medium text-gray-500">Specific Customers</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" checked={specificCustomer} onChange={() => setSpecificCustomer(v => !v)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6 w-full max-w-2xl border border-gray-200 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <span className="text-xs text-gray-500">Provide Promo Codes to customers.<br /><span className="text-gray-700 font-semibold">Customers: All</span></span>
          <button
            className={`px-4 py-2 rounded-lg font-medium shadow transition text-sm mt-2 sm:mt-0 
              ${specificCustomer 
                ? 'bg-[#7c81f7] text-white hover:bg-[#6366f1] cursor-pointer' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            disabled={!specificCustomer}
          >
            Select Customers &nbsp;→
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">Select Promo Type</label>
          <select
            className="w-full border-b border-gray-300 bg-transparent p-2 text-gray-700 focus:outline-none"
            value={promoType}
            onChange={e => setPromoType(e.target.value)}
          >
            <option value="Amount (AED)">Amount (AED)</option>
            <option value="Percentage">Percentage</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Promocode</label>
            <div className="flex items-center border-b border-gray-300">
              <input
                type="text"
                className="w-full bg-transparent p-2 text-gray-700 focus:outline-none"
                value={code}
                onChange={e => setCode(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Discount</label>
            <div className="flex items-center border-b border-gray-300">
              <input
                type="number"
                className="w-full bg-transparent p-2 text-gray-700 focus:outline-none"
                value={discount}
                onChange={e => setDiscount(e.target.value)}
              />
              <span className="text-gray-500 font-semibold">{promoType === 'Percentage' ? '%' : 'AED'}</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">Duration</label>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
            <div className="flex-1 flex flex-col sm:flex-row gap-2 items-center w-full">
              <input
                type="date"
                className="w-full bg-transparent border-b border-gray-300 p-2 text-gray-700 focus:outline-none"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
              <span className="text-gray-500">-</span>
              <input
                type="date"
                className="w-full bg-transparent border-b border-gray-300 p-2 text-gray-700 focus:outline-none"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row gap-2 items-center w-full mt-2 sm:mt-0">
              <input
                type="time"
                className="w-full bg-transparent border-b border-gray-300 p-2 text-gray-700 focus:outline-none"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
              <span className="text-gray-500">-</span>
              <input
                type="time"
                className="w-full bg-transparent border-b border-gray-300 p-2 text-gray-700 focus:outline-none"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-md">Status (Active / Discontinue)</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" checked={status} onChange={() => setStatus(v => !v)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>
    </div>
  );
}