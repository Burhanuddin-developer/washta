"use client";
import Image from 'next/image';
import { useState } from 'react';

const Data = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  date: '16 May 2024 At 10:00 AM',
  location: 'B1, XYZ Mall Parking, Dubai , UAE',
}));
const signatories = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    position: 'CEO',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
    {
    name: 'John Doe',
    email: 'johndoe@example.com',
    position: 'CEO',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];
function DetailsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{width:"80%", marginLeft: "10%"}}>
      <div className="bg-white rounded-2xl shadow-xl p-2 sm:p-6 w-full max-w-2xl mx-2 relative animate-fade-in overflow-y-auto max-h-[95vh]">
        <button className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold" onClick={onClose}>&times;</button>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">DXB Car Details</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left: Details & Signatory */}
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <div className="font-semibold mb-2">Details</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                  <span className="text-gray-500">VAT Number:</span>
                  <span className="font-medium">+971xxxxxxxxxx</span>
                </div>
                <div className="flex items-center bg-[#f5f6fa] rounded-lg px-3 py-2 text-sm justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-medium">B1, XYZ Mall Parking, Dubai , UAE</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-semibold mb-2">Authorized Signatory</div>
              <div className="flex flex-col gap-2">
                {signatories.map((s, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#f8f8fc] border border-[#e6e6f0] rounded-lg px-3 py-2 gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <Image src={s.avatar} alt={s.name} width={36} height={36} className="rounded-full object-cover" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-sm truncate">{s.name}</span>
                        <span className="text-xs text-gray-500 truncate">{s.email}</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-right">
                      <div className="text-gray-500">Position</div>
                      <div className="font-semibold text-black">{s.position}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Verification Document */}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Verification Document</div>
              <button className="text-gray-400 hover:text-gray-700 text-lg" title="Expand"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4h7M4 4v7M4 4l6 6M20 20h-7M20 20v-7M20 20l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            </div>
            <div className="flex-1 bg-[#f5f6fa] rounded-lg border border-[#e6e6f0] min-h-[120px] flex items-center justify-center relative">
           <button className="absolute top-2 right-2 text-[#7c81f7] hover:text-[#6366f1] bg-white rounded-full p-1 shadow" title="Download"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            </div>
          </div>
        </div>
             <div className="flex flex-col sm:flex-row gap-2 mt-4 md:pl-100">
              <button className="flex-1 rounded py-2 text-sm font-medium text-white bg-[#7c81f7] hover:bg-[#6366f1]">Terminate Seller &gt;</button>
            </div>
      </div>
    </div>
  );
}

function ApprovedCard({ name, avatar, date, location, onView}: { name: string; avatar: string; date: string; location: string, onView: () => void  }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 min-w-[250px] max-w-[320px] border border-gray-200">
      <div className="flex flex-col items-center justify-center mb-1">
        <Image src={avatar} alt={name} width={40} height={40} className="rounded-full object-cover mb-2" />
        <div className="font-semibold text-lg leading-tight text-center w-full">{name}</div>
        <div className="text-xs text-gray-500 mt-0.5 text-center w-full">{date}</div>
      </div>
      <div className="flex items-center text-xs text-gray-600 gap-1 mb-2">
        <span>📍</span>
        <span>{location}</span>
      </div>
      <button className="border border-gray-400 rounded w-full py-1 text-sm font-medium mb-2 hover:bg-gray-50" onClick={onView}>View Documents</button>
    </div>
  );
}

export default function Approved() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-2 sm:p-4">
      <h1 className='text-2xl font-semibold mb-2 text-center sm:text-left'>Approved Application</h1>
      <div className="w-full overflow-x-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:w-3xl min-w-[260px]">
          {Data.map((item) => (
            <ApprovedCard key={item.id} {...item} onView={() => setModalOpen(true)} />
          ))}
        </div>
      </div>
      <DetailsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}