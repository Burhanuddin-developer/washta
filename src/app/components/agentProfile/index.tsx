"use client";
import React, { useState } from "react";

const agent = {
  name: "Franc Lee",
  username: "franc.lee",
  role: "Agent",
  joiningDate: "16 May 2024",
  img: "https://randomuser.me/api/portraits/women/44.jpg",
};

const ratings = [5, 4, 3, 2, 1];
const ratingCounts = [120, 80, 40, 20, 13];
const totalReviews = 273;
const averageRating = 4.5;

interface EditProfileProps {
  agent: typeof agent;
  onClose: () => void;
}

function EditProfile({ agent, onClose }: EditProfileProps) {
  const [form, setForm] = useState({
    username: agent.username,
    name: agent.name,
    password: "",
    rePassword: "",
  });

  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col p-2 sm:p-6 ">
      <div className="max-w-4xl  flex flex-col md:flex-row gap-4"> 
        {/* Edit Details Card */}
        <div className="flex-1 bg-white rounded-2xl p-4 sm:p-6 shadow flex flex-col">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Edit Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input type="text" className="w-full border-b border-gray-300 bg-transparent outline-none px-0" value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium ">Name</label>
              <input type="text" className="w-full border-b border-gray-300 bg-transparent outline-none  px-0" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input type="password" className="w-full border-b border-gray-300 bg-transparent outline-none px-0" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium">Re-Enter Password</label>
              <input type="password" className="w-full border-b border-gray-300 bg-transparent outline-none px-0" value={form.rePassword} onChange={e => setForm(f => ({ ...f, rePassword: e.target.value }))} />
            </div>
          </div>
          <div className="flex justify-end mt-6 gap-2">
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium shadow hover:bg-gray-300 transition text-sm" onClick={onClose}>Cancel</button>
            <button className="bg-[#7c81f7] text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-[#6366f1] transition text-sm">Save &gt;</button>
          </div>
        </div>
        {/* Profile Picture Card */}
        <div className="flex flex-col items-center bg-white rounded-2xl p-4 sm:p-6 shadow min-w-[220px] max-w-xs mx-auto">
          <img src={agent.img} alt={agent.name} className="w-38 h-38 rounded-full object-cover mb-18" />
          <div className="text-center font-medium text-gray-700">Edit Profile Picture</div>
        </div>
      </div>
    </div>
  );
}

export default function AgentProfile() {
  const [editOpen, setEditOpen] = useState(false);
  if (editOpen) {
    return <EditProfile agent={agent} onClose={() => setEditOpen(false)} />;
  }
  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col gap-6 p-2 sm:p-4">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto items-stretch">
        {/* Profile Card */}
        <div className="flex-1 bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col lg:flex-row gap-6 items-center lg:items-start min-w-0">
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-black text-center sm:text-left">{agent.name}</h2>
              {/* Edit profile button is above image */}
            </div>
            <div className="mt-4">
              <div className="font-semibold text-base sm:text-lg mb-2">Details</div>
              <div className="flex flex-col gap-3 max-w-full sm:max-w-80">
                <div className="flex items-center gap-2 bg-[#f5f6fa] rounded-2xl justify-between pl-2 py-2 text-xs sm:text-sm">
                  <span className="text-gray-500">Username:</span>
                  <span className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-md font-semibold break-all">{agent.username}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f5f6fa] rounded-2xl justify-between pl-2 py-2 text-xs sm:text-sm">
                  <span className="text-gray-500">Role</span>
                  <span className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-md font-semibold">{agent.role}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f5f6fa] rounded-2xl justify-between pl-2 py-2 text-xs sm:text-sm">
                  <span className="text-gray-500">Joining Date</span>
                  <span className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-md font-semibold">{agent.joiningDate}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center flex-shrink-0 mt-6 lg:mt-0 w-full sm:w-auto">
            <button className="self-end mb-2 bg-[#7c81f7] text-white px-4 sm:px-5 py-2 rounded-lg font-medium shadow hover:bg-[#6366f1] transition text-xs sm:text-sm w-full sm:w-auto" onClick={() => setEditOpen(true)}>Edit profile &gt;</button>
            <img src={agent.img} alt={agent.name} className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white shadow mt-2 " />
          </div>
        </div>
        {/* Rating Card */}
        <div className="w-full lg:w-[350px] bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col lg:ml-0 lg:self-start">
          <div className="font-semibold text-base sm:text-lg mb-2">Rating</div>
          <div className="flex flex-col lg:flex-row w-full gap-2 items-start lg:items-center">
            <div className="flex flex-col w-full lg:w-2/3 gap-2">
              {ratings.map((r, i) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="w-4 text-xs">{r}</span>
                  <div className="bg-[#e6e6f0] rounded h-2 flex-1 mr-2">
                    <div
                      className="bg-[#6c63ff] h-2 rounded"
                      style={{ width: `${(ratingCounts[i] / Math.max(...ratingCounts)) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row lg:flex-col items-center justify-between lg:items-center lg:w-1/3 w-full gap-2 mt-2 lg:mt-0">
              <div className="font-semibold text-sm sm:text-base">{totalReviews}</div>
              <div className="text-xs text-gray-500">Reviews</div>
              <div className="font-semibold text-sm sm:text-base mt-1">{averageRating} <span className="text-[#ffb400]">★</span></div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}