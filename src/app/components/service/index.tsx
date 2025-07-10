"use client";
import { useState } from 'react';
import Image from "next/image";

// Mock providers for selection
const mockProviders = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: 'Quick Car Wash',
  address: 'B 102, 123 street, Dubai, UAE',
  logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64',
}));

function ServiceProviderSelectModal({ open, onClose, providers, selected, onSelect }: any) {
  const [search, setSearch] = useState("");
  const filtered = providers.filter((p: any) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.address.toLowerCase().includes(search.toLowerCase())
  );
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-2xl mx-2 relative animate-fade-in flex flex-col max-h-[90vh]">
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Search by service provider"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex-1 overflow-y-auto pr-1 mb-4">
          {filtered.map((p: any) => (
            <label
              key={p.id}
              className={`flex items-center gap-3 p-3 mb-3 rounded-xl border ${selected.includes(p.id) ? 'border-[#a3a3f7] bg-[#f8f8ff]' : 'border-gray-200 bg-white'} cursor-pointer transition-all`}
            >
              <Image src={p.logo} alt={p.name} width={40} height={40} className="rounded object-cover" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-base leading-tight">{p.name}</div>
                <div className="font-medium text-xs">{p.address}</div>
              </div>
              <input
                type="checkbox"
                checked={selected.includes(p.id)}
                onChange={() => onSelect(p.id)}
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

export default function Service() {
  const [specificProvider, setSpecificProvider] = useState(false);
  const [feeType, setFeeType] = useState('Percentage');
  const [fee, setFee] = useState('18.00');
  const [taxable, setTaxable] = useState('Yes');
  const [applyPerService, setApplyPerService] = useState(false);
  const [applyPerInvoice, setApplyPerInvoice] = useState(true);
  const [status, setStatus] = useState(true);
  const [providerModalOpen, setProviderModalOpen] = useState(false);
  const [selectedProviders, setSelectedProviders] = useState<number[]>([]);

  const handleSelectProvider = (id: number) => {
    setSelectedProviders((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };
  const handleRemoveProvider = (id: number) => {
    setSelectedProviders((prev) => prev.filter((pid) => pid !== id));
  };

  return (
    <div className="min-h-screen bg-[#f6f7ff] flex flex-col p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-4 w-full">
        <h1 className="text-2xl font-medium text-gray-800 w-full ml-6">Service Fee</h1>
        <div className="flex items-center gap-2 w-full">
          <span className="text-sm font-medium text-gray-500">Specific Service Provider</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" checked={specificProvider} onChange={() => setSpecificProvider(v => !v)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6 w-full max-w-2xl border border-gray-200 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <span className="text-xs text-gray-500">Manage Service Fee for all service providers or specific one
            <br />
            <span className="text-gray-700 font-semibold">Service Providers:</span>
          </span>
            {/* Show selected customers as pills */}
        {selectedProviders.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {mockProviders.filter(c => selectedProviders.includes(c.id)).map(c => (
              <span key={c.id} className="inline-flex items-center bg-[#f6f7ff] border border-gray-300 rounded px-3 py-1 text-sm font-medium text-gray-800">
                {c.name}
                <button
                  className="ml-2 text-gray-400 hover:text-gray-700 text-lg font-bold focus:outline-none"
                  onClick={() => handleRemoveProvider(c.id)}
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
              ${specificProvider 
                ? 'bg-[#7c81f7] text-white hover:bg-[#6366f1] cursor-pointer' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            disabled={!specificProvider}
            onClick={() => setProviderModalOpen(true)}
          >
            Select Service Providers &nbsp;→
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">Select Fee Type</label>
          <select
            className="w-full border-b border-gray-300 bg-transparent p-2 text-gray-700 focus:outline-none"
            value={feeType}
            onChange={e => setFeeType(e.target.value)}
          >
            <option value="Percentage">Percentage</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Washta Fees</label>
            <div className="flex items-center border-b border-gray-300">
              <input
                type="number"
                className="w-full bg-transparent p-2 text-gray-700 focus:outline-none"
                value={fee}
                onChange={e => setFee(e.target.value)}
              />
              <span className="text-gray-500 font-semibold">{feeType === 'Percentage' ? '%' : 'AED'}</span>
            </div>
          </div>
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Is Amount Taxable?</label>
            <select
              className="w-full border-b border-gray-300 bg-transparent p-2 text-gray-700 focus:outline-none"
              value={taxable}
              onChange={e => setTaxable(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="sm:flex-row mb-4 items-center">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              checked={applyPerService}
              onChange={() => setApplyPerService(v => !v)}
              className="w-4 h-4 rounded border-gray-300 focus:ring-0"
            />
            <span className="text-sm">Apply per service</span>
          </div>
          <div className="text-md text-gray-700 text-right">
            5% VAT (As per the Government Rules*)
          </div>
          <div className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              checked={applyPerInvoice}
              onChange={() => setApplyPerInvoice(v => !v)}
              className="w-4 h-4 rounded border-gray-300 focus:ring-0 accent-[#7c81f7]"
            />
            <span className="text-sm">Apply per invoice</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-md">Status (Applicable / Non-Applicable)</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" checked={status} onChange={() => setStatus(v => !v)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>
      <ServiceProviderSelectModal
        open={providerModalOpen}
        onClose={() => setProviderModalOpen(false)}
        providers={mockProviders}
        selected={selectedProviders}
        onSelect={handleSelectProvider}
      />
    </div>
  );
}
