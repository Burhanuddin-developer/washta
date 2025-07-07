"use client";
import { useState } from 'react';

export default function Service() {
  const [specificProvider, setSpecificProvider] = useState(false);
  const [feeType, setFeeType] = useState('Percentage');
  const [fee, setFee] = useState('18.00');
  const [taxable, setTaxable] = useState('Yes');
  const [applyPerService, setApplyPerService] = useState(false);
  const [applyPerInvoice, setApplyPerInvoice] = useState(true);
  const [status, setStatus] = useState(true);

  return (
    <div className="min-h-screen bg-[#f6f7ff] flex flex-col p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-4 w-full">
        <h1 className="text-2xl font-medium text-gray-800 w-full ml-6">Service Fee</h1>
        <div className="flex items-center gap-2 w-full  ">
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
            <span className="text-gray-700 font-semibold">Service Providers:All</span>
          </span>
          <button
            className={`px-4 py-2 rounded-lg font-medium shadow transition text-sm mt-2 sm:mt-0 
              ${specificProvider 
                ? 'bg-[#7c81f7] text-white hover:bg-[#6366f1] cursor-pointer' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            disabled={!specificProvider}
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
        <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              checked={applyPerService}
              onChange={() => setApplyPerService(v => !v)}
              className="w-4 h-4 rounded border-gray-300 focus:ring-0"
            />
            <span className="text-sm">Apply per service</span>
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
          <div className="flex-1 text-sm text-gray-700 text-right">
            5% VAT (As per the Government Rules*)
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
    </div>
  );
}
