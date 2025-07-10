"use client";
import { FaFilter, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

const companies = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'Quick Car wash',
  logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64',
  time: '10:00 AM',
  status: 'Completed',
  spent: 2500,
  currency: 'AED',
}));

const topCompanies = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: 'Quick Car wash',
  processedOrders: 203,
  averageSales: 1500,
  totalSales: 73189,
  currency: 'AED',
}));

const companyDetails = {
  company: 'Quick Car Wash',
  service: 'car wash',
  location: 'B 102,123 Street, Dubai,UAE',
};
const orderDetails = {
  orderId: 'CS-1095',
  orderDate: '16 May 2024 At 10:00 AM',
  status: 'Completed',
};
function InvoiceModal({ open, onClose, invoiceData }: { open: boolean; onClose: () => void; invoiceData: any }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-2 sm:p-6 w-full max-w-lg mx-2 relative animate-fade-in overflow-y-auto max-h-[95vh]">
        <button className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold" onClick={onClose}>&times;</button>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Invoice</h2>
        <div className="mb-4">
          <div className="w-full h-14 flex items-center justify-center mb-4">
            {/* Barcode SVG */}
            <svg width="90%" height="40" viewBox="0 0 300 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="6" height="40" fill="#222" />
              <rect x="10" y="0" width="2" height="40" fill="#222" />
              <rect x="16" y="0" width="4" height="40" fill="#222" />
              <rect x="24" y="0" width="2" height="40" fill="#222" />
              <rect x="30" y="0" width="6" height="40" fill="#222" />
              <rect x="40" y="0" width="2" height="40" fill="#222" />
              <rect x="46" y="0" width="8" height="40" fill="#222" />
              <rect x="58" y="0" width="2" height="40" fill="#222" />
              <rect x="64" y="0" width="4" height="40" fill="#222" />
              <rect x="72" y="0" width="2" height="40" fill="#222" />
              <rect x="78" y="0" width="6" height="40" fill="#222" />
              <rect x="88" y="0" width="2" height="40" fill="#222" />
              <rect x="94" y="0" width="8" height="40" fill="#222" />
              <rect x="106" y="0" width="2" height="40" fill="#222" />
              <rect x="112" y="0" width="4" height="40" fill="#222" />
              <rect x="120" y="0" width="2" height="40" fill="#222" />
              <rect x="126" y="0" width="6" height="40" fill="#222" />
              <rect x="136" y="0" width="2" height="40" fill="#222" />
              <rect x="142" y="0" width="8" height="40" fill="#222" />
              <rect x="154" y="0" width="2" height="40" fill="#222" />
              <rect x="160" y="0" width="4" height="40" fill="#222" />
              <rect x="168" y="0" width="2" height="40" fill="#222" />
              <rect x="174" y="0" width="6" height="40" fill="#222" />
              <rect x="184" y="0" width="2" height="40" fill="#222" />
              <rect x="190" y="0" width="8" height="40" fill="#222" />
              <rect x="202" y="0" width="2" height="40" fill="#222" />
              <rect x="208" y="0" width="4" height="40" fill="#222" />
              <rect x="216" y="0" width="2" height="40" fill="#222" />
              <rect x="222" y="0" width="6" height="40" fill="#222" />
              <rect x="232" y="0" width="2" height="40" fill="#222" />
              <rect x="238" y="0" width="8" height="40" fill="#222" />
              <rect x="250" y="0" width="2" height="40" fill="#222" />
              <rect x="256" y="0" width="4" height="40" fill="#222" />
              <rect x="264" y="0" width="2" height="40" fill="#222" />
              <rect x="270" y="0" width="6" height="40" fill="#222" />
              <rect x="280" y="0" width="2" height="40" fill="#222" />
              <rect x="286" y="0" width="8" height="40" fill="#222" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex justify-between"><span>Booking Date</span><span>{invoiceData?.orderDetails?.orderDate || '02 Feb'} | {invoiceData?.orderDetails?.orderTime || '01:00 PM'}</span></div>
          <div className="flex justify-between"><span>Car Plate Number</span><span>{invoiceData?.carDetails?.plate || 'A-1234'}</span></div>
          <div className="flex justify-between"><span>Car Type</span><span>{invoiceData?.carDetails?.carType || 'Sedan'}</span></div>
          <div className="flex justify-between"><span>Service</span><span>{invoiceData?.service || 'Car Wash & Full Cleaning'}</span></div>
          <div className="flex justify-between"><span>Duration</span><span>{invoiceData?.duration || '1 hr'}</span></div>
          <div className="flex justify-between"><span>Exterior Cleaning</span><span>{invoiceData?.exterior || 'AED 7.5'}</span></div>
          <div className="flex justify-between"><span>Interior Cleaning</span><span>{invoiceData?.interior || 'AED 7.5'}</span></div>
          <div className="flex justify-between"><span>Tire Cleaning</span><span>{invoiceData?.tire || 'AED 5'}</span></div>
          <div className="flex justify-between"><span>Tax & Fees</span><span>{invoiceData?.tax || 'AED 0.00'}</span></div>
          <div className="flex justify-between font-semibold"><span>Total</span><span>{invoiceData?.total || 'AED 20.00'}</span></div>
          <div className="flex justify-between"><span>Payment</span><span>{invoiceData?.paymentCard || '**** **** **** 1578'}</span></div>
          <div className="flex justify-between"><span>Order ID</span><span>{invoiceData?.orderDetails?.orderId || 'CS-1095'}</span></div>
        </div>
        <div className="mt-4 mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="text-xs text-gray-500">Payment</div>
            <div className="font-bold text-lg">{invoiceData?.payment || 0} <span className="text-xs font-medium">{invoiceData?.currency || 'AED'}</span></div>
          </div>
          <button className="rounded py-2 px-4 text-sm font-medium text-white bg-[#7c81f7] hover:bg-[#6366f1] whitespace-nowrap">Download E-Receipt &gt;</button>
        </div>
      </div>
    </div>
  );
}

function DetailsModal({ open, onClose, company, onViewInvoice }: { open: boolean; onClose: () => void; company: any; onViewInvoice: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-2 sm:p-6 w-full max-w-2xl mx-2 relative animate-fade-in overflow-y-auto max-h-[95vh]">
        <button className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold" onClick={onClose}>&times;</button>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">{company?.name || 'Company'}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Company Details */}
          <div className="flex-1 min-w-0">
            <div className="font-medium mb-2">Company Details</div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Company:</span>
                <span className="font-medium">{companyDetails.company}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Service:</span>
                <span className="font-medium">{companyDetails.service}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Location:</span>
                <span className="font-medium">{companyDetails.location}</span>
              </div>
            </div>
            <div className="mt-2 mb-2 ">
              <div className="text-xs text-gray-500">Payment</div>
              <div className="font-bold text-lg">{company?.spent || 0} <span className="text-xs font-medium">{company?.currency || 'AED'}</span></div>
            </div>
          </div>
          {/* Order Details */}
          <div className="flex-1 min-w-0">
            <div className="font-medium mb-2">Order Details</div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Order ID:</span>
                <span className="font-medium">{orderDetails.orderId}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Order Date:</span>
                <span className="font-medium">{orderDetails.orderDate}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="font-medium">{orderDetails.status}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <button className="flex-1 border border-gray-300 rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={onViewInvoice}>View Invoice</button>
              <button className="flex-1 border border-gray-300 rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Delete</button>
              <button className="flex-1 border border-gray-300 rounded py-2 text-sm font-medium text-white bg-[#7c81f7] hover:bg-[#6366f1]">Share details &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyCard({ name, logo, time, status, spent, currency, onClick }: any) {
  return (
    <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex flex-col gap-2 min-w-[220px] max-w-[300px] cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-3 mb-1">
        <Image src={logo} alt={name} width={36} height={36} className="rounded object-cover" />
        <div>
          <div className="font-semibold text-base leading-tight">{name}</div>
          <div className="text-xs text-gray-500 mt-0.5">{time}</div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-600 mb-1">
        <span>Status</span>
        <span className="font-semibold text-black">{status}</span>
      </div>
      <div className="flex justify-between items-end mt-2">
        <span className="text-xs text-gray-500">Total Spent</span>
        <span className="font-bold text-xl">{spent} <span className="text-xs font-medium">{currency}</span></span>
      </div>
    </div>
  );
}

function TopCompanyCard({ name, logo, processedOrders, averageSales, totalSales, currency }: any) {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-blue-100 p-3 mb-2 last:mb-0">
      <div className="flex items-center gap-2 mb-1">
        <div className="font-medium text-sm leading-tight">{name}</div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <div>
          <div>Processed Orders</div>
          <div className="font-bold text-black text-base">{processedOrders}</div>
        </div>
        <div>
          <div>Average Sales</div>
          <div className="font-bold text-black text-base">{averageSales} <span className="text-xs font-medium">{currency}</span></div>
        </div>
        <div>
          <div>Total Sales (30 days)</div>
          <div className="font-bold text-black text-base">{totalSales.toLocaleString()} <span className="text-xs font-medium">{currency}</span></div>
        </div>
      </div>
    </div>
  );
}

export default function CompaniesPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState<any>(null);
    const [invoiceOpen, setInvoiceOpen] = useState(false);
    const [invoiceData, setInvoiceData] = useState<any>(null);
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-2">
         <h1 className="text-2xl font-semibold mb-2 sm:ml-8">Companies</h1>
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Main Section */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
         
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search by service provider"
              className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="p-2 rounded bg-gray-100 border border-gray-300 hover:bg-gray-200">
              <FaFilter className="text-gray-500" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {companies.map((c) => (
              <CompanyCard key={c.id} {...c} onClick={() => { setSelectedCompany(c); setModalOpen(true); }} />
            ))}
          </div>
        </div>
        {/* Sidebar Section */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                <FaBuilding className="text-blue-500 text-base" />
              </span>
              Top Companies
            </h2>
            <div>
              {topCompanies.map((c) => (
                <TopCompanyCard key={c.id} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <DetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        company={selectedCompany}
        onViewInvoice={() => {
          setModalOpen(false);
          setInvoiceData({
            companyDetails,
            orderDetails,
            payment: selectedCompany?.spent,
            currency: selectedCompany?.currency,
            // Add more fields as needed
          });
          setInvoiceOpen(true);
        }}
      />
      <InvoiceModal open={invoiceOpen} onClose={() => setInvoiceOpen(false)} invoiceData={invoiceData} />
    </div>
  );
}