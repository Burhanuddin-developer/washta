"use client";
import { useState } from 'react';
import Image from "next/image";

// Mock customers for selection
const mockCustomers = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: 'Quick Car Wash',
  avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  address: 'B 102, 123 street, Dubai, UAE',
}));

function CustomerSelectModal({ open, onClose, customers, selected, onSelect }: any) {
  const [search, setSearch] = useState("");
  const filtered = customers.filter((c: any) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-2xl mx-2 relative animate-fade-in flex flex-col max-h-[90vh]">
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Search by customer"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex-1 overflow-y-auto pr-1 mb-4">
          {filtered.map((c: any) => (
            <label
              key={c.id}
              className={`flex items-center gap-3 p-3 mb-3 rounded-xl border ${selected.includes(c.id) ? 'border-[#a3a3f7] bg-[#f8f8ff]' : 'border-gray-200 bg-white'} cursor-pointer transition-all`}
            >
              <Image src={c.avatar} alt={c.name} width={40} height={40} className="rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-base leading-tight">{c.name}</div>
                  <div className="font-medium text-xs">{c.address}</div>
              </div>
              <input
                type="checkbox"
                checked={selected.includes(c.id)}
                onChange={() => onSelect(c.id)}
                className="w-5 h-5 accent-[#7c81f7] rounded border-gray-300"
              />
            </label>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <button className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 rounded bg-[#7c81f7] text-white font-medium hover:bg-[#6366f1]" onClick={onClose}>Done &nbsp;→</button>
        </div>
      </div>
    </div>
  ) : null;
}

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
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);

  const handleSelectCustomer = (id: number) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };
  const handleRemoveCustomer = (id: number) => {
    setSelectedCustomers((prev) => prev.filter((cid) => cid !== id));
  };

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
          <span className="text-xs text-gray-500">Provide Promo Codes to customers.<br /><span className="text-gray-700 font-semibold">Specific Customers:</span></span>
          {/* Show selected customers as pills */}
        {selectedCustomers.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {mockCustomers.filter(c => selectedCustomers.includes(c.id)).map(c => (
              <span key={c.id} className="inline-flex items-center bg-[#f6f7ff] border border-gray-300 rounded px-3 py-1 text-sm font-medium text-gray-800">
                {c.name}
                <button
                  className="ml-2 text-gray-400 hover:text-gray-700 text-lg font-bold focus:outline-none"
                  onClick={() => handleRemoveCustomer(c.id)}
                  aria-label={`Remove ${c.name}`}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}
          <button
            className={`px-4 py-2 rounded-lg font-medium shadow transition text-sm mt-2 sm:mt-0 
              ${specificCustomer  
                ? 'bg-[#7c81f7] text-white hover:bg-[#6366f1] cursor-pointer' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            disabled={!specificCustomer}
            onClick={() => setCustomerModalOpen(true)}
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
          <div className="flex flex-col gap-2 md:max-w-80 md:ml-75">
            <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
              <input
                type="date"
                className="w-full bg-transparent  p-2 text-gray-700 focus:outline-none"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
              <span className="text-gray-500">-</span>
              <input
                type="date"
                className="w-full bg-transparent p-2 text-gray-700 focus:outline-none"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
              <input
                type="time"
                className="w-full bg-transparent  p-2 text-gray-700 focus:outline-none"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
              <span className="text-gray-500">-</span>
              <input
                type="time"
                className="w-full bg-transparent p-2 text-gray-700 focus:outline-none"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className='border-b border-b-gray-300'></div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-md">Status (Active / Discontinue)</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" checked={status} onChange={() => setStatus(v => !v)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
        <CustomerSelectModal
          open={customerModalOpen}
          onClose={() => setCustomerModalOpen(false)}
          customers={mockCustomers}
          selected={selectedCustomers}
          onSelect={handleSelectCustomer}
        />
      </div>
    </div>
  );
}