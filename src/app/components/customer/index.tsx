"use client";
import { FaFilter } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';
import React, { useState } from 'react';

const customers = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'Kristin Watson',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  time: '10:00 AM',
  status: 'Completed',
  spent: 2500,
  currency: 'AED',
}));

const topCustomers = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: 'Kristin Watson',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  visits: 4,
  spent: 2500,
  currency: 'AED',
}));

const carDetails = {
  buyerName: 'John Doe',
  car: 'Audi A8',
  carType: 'Sedan',
  plate: 'A-1234',
};
const orderDetails = {
  orderId: 'CS-1095',
  orderDate: '16 May 2024',
  orderTime: '10:00 AM',
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

function DetailsModal({ open, onClose, customer, onViewInvoice }: { open: boolean; onClose: () => void; customer: any; onViewInvoice: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-2 sm:p-6 w-full max-w-2xl mx-2 relative animate-fade-in overflow-y-auto max-h-[95vh]">
        <button className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold" onClick={onClose}>&times;</button>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">{customer?.name || 'Customer'}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Car Details */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold mb-2">Car Details</div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Buyer Name:</span>
                <span className="font-semibold">{carDetails.buyerName}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Car:</span>
                <span className="font-semibold">{carDetails.car}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Car Type:</span>
                <span className="font-semibold">{carDetails.carType}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Car Plate Number:</span>
                <span className="font-semibold">{carDetails.plate}</span>
              </div>
            </div>
            <div className="mt-2 mb-2 ">
              <div className="text-xs text-gray-500">Payment</div>
              <div className="font-bold text-lg">{customer?.spent || 0} <span className="text-xs font-medium">{customer?.currency || 'AED'}</span></div>
            </div>
          </div>
          {/* Order Details */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold mb-2">Order Details</div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Order ID:</span>
                <span className="font-semibold">{orderDetails.orderId}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Order Date:</span>
                <span className="font-semibold">{orderDetails.orderDate}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Order Time:</span>
                <span className="font-semibold">{orderDetails.orderTime}</span>
              </div>
              <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="font-semibold">{orderDetails.status}</span>
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

function CustomerCard({ name, avatar, time, status, spent, currency, onClick }: any) {
  return (
    <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex flex-col gap-2 min-w-[150px] max-w-[300px] cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-3 mb-1">
        <Image src={avatar} alt={name} width={36} height={36} className="rounded-full object-cover" />
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

function TopCustomerCard({ name, avatar, visits, spent, currency }: any) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg border border-blue-100 p-3 mb-2 last:mb-0">
      <div className="flex items-center gap-2">
        <Image src={avatar} alt={name} width={32} height={32} className="rounded-full object-cover" />
        <div>
          <div className="font-medium text-sm leading-tight">{name}</div>
          <div className="text-xs text-gray-500">{visits} Visits</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs text-gray-500">Total Spent</div>
        <div className="font-bold text-base">{spent} <span className="text-xs font-medium">{currency}</span></div>
      </div>
    </div>
  );
}

export default function CustomersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [invoiceData, setInvoiceData] = useState<any>(null);
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-2">
      <h1 className="text-2xl font-semibold mb-2 sm:ml-8">Customers</h1>
      <div className="flex flex-col lg:flex-row gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {customers.map((c) => (
              <CustomerCard key={c.id} {...c} onClick={() => { setSelectedCustomer(c); setModalOpen(true); }} />
            ))}
          </div>
        </div>
        {/* Sidebar Section */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                <FaUserFriends className="text-blue-500 text-base" />
              </span>
              Top Customers
            </h2>
            <div>
              {topCustomers.map((c) => (
                <TopCustomerCard key={c.id} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <DetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        customer={selectedCustomer}
        onViewInvoice={() => {
          setModalOpen(false);
          setInvoiceData({
            carDetails,
            orderDetails,
            payment: selectedCustomer?.spent,
            currency: selectedCustomer?.currency,
            // Add more fields as needed
          });
          setInvoiceOpen(true);
        }}
      />
      <InvoiceModal open={invoiceOpen} onClose={() => setInvoiceOpen(false)} invoiceData={invoiceData} />
    </div>
  );
}