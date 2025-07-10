"use client";
import { useState } from "react";

const agents = [
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function AddAgentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-2 relative animate-fade-in flex flex-col max-h-[95vh]">
        <button className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold mb-1">Add Washta Agent</h2>
        <div className="text-gray-500 mb-4">Create a new account</div>
        <form className="flex flex-col gap-4">
          {/* Username */}
          <div className="relative mb-2">
            <input
              className="w-full bg-transparent border-0 border-b border-gray-300 p-2 text-lg font-semibold focus:outline-none"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder=" "
              id="add-agent-username"
            />
            <label
              htmlFor="add-agent-username"
              className={`absolute left-2 transition-all duration-200 pointer-events-none
                ${username ? "text-xs -top-4 text-black font-bold" : "text-md top-3 text-gray-500 font-bold"}
              `}
            >
              Username
            </label>
          </div>
          {/* Name */}
          <div className="relative mb-2">
            <input
              className="w-full bg-transparent border-b border-gray-300 p-2 text-md focus:outline-none"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder=" "
              id="add-agent-name"
            />
            <label
              htmlFor="add-agent-name"
              className={`absolute left-2 transition-all duration-200 pointer-events-none
                ${name ? "text-xs -top-4 text-black font-bold" : "text-md top-3 text-gray-500 font-bold"}
              `}
            >
              Name
            </label>
          </div>
          {/* Password */}
          <div className="relative mb-2">
            <input
              className="w-full bg-transparent border-b border-gray-300 p-2 text-md focus:outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder=" "
              type="password"
              id="add-agent-password"
            />
            <label
              htmlFor="add-agent-password"
              className={`absolute left-2 transition-all duration-200 pointer-events-none
                ${password ? "text-xs -top-4 text-black font-bold" : "text-md top-3 text-gray-500 font-bold"}
              `}
            >
              Password
            </label>
          </div>
          {/* Role */}
          <div className="relative mb-2">
            <input
              className="w-full bg-transparent border-b border-gray-300 p-2 text-md focus:outline-none"
              value={role}
              onChange={e => setRole(e.target.value)}
              placeholder=" "
              id="add-agent-role"
            />
            <label
              htmlFor="add-agent-role"
              className={`absolute left-2 transition-all duration-200 pointer-events-none
                ${role ? "text-xs -top-4 text-black font-bold" : "text-md top-3 text-gray-500 font-bold"}
              `}
            >
              Role
            </label>
          </div>
          <div className="flex justify-between mt-4 gap-2">
            <button type="button" className="border border-gray-400 rounded px-6 py-2 text-md font-medium bg-white hover:bg-gray-100" onClick={onClose}>Cancel</button>
            <button type="submit" className="rounded px-6 py-2 text-md font-medium text-white bg-[#7c81f7] hover:bg-[#6366f1]">Create &nbsp;→</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Agents() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen md:w-4xl bg-[#f6f7ff] flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4 w-full">
          <h2 className="text-2xl font-medium text-gray-800 w-full sm:w-auto text-center sm:text-left">Agents</h2>
          <button className="bg-[#7c81f7] text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-[#6366f1] transition w-full sm:w-auto" onClick={() => setModalOpen(true)}>Add Agent</button>
        </div>
        <div className="rounded-2xl border border-[#d6d6f7] bg-white p-2 sm:p-4">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl border border-[#d6d6f7] p-2 sm:p-4 mb-4 shadow-sm gap-4"
            >
              <div className="flex flex-col sm:flex-row  gap-2 sm:gap-2 w-full">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover border"
                />
                <span className="font-medium text-md text-gray-800 sm:text-left md:pt-4">
                  {agent.name}
                </span>
                <div className="flex flex-col" style={{width: "80%"}}>
                  <div className="flex flex-col sm:flex-row justify-center md:space-x-15 gap-2 sm:gap-6 mt-1 w-full text-center">
                    <div>
                      <span className="text-xs text-gray-400">Username</span>
                      <div className="text-sm font-semibold text-gray-700">
                        {agent.username}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">
                        Joining Date
                      </span>
                      <div className="text-sm font-semibold text-gray-700">
                        {agent.date}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Role</span>
                      <div className="text-sm font-semibold text-gray-800">
                        {agent.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-[#7c81f7] text-white px-4 py-1 rounded-lg font-medium shadow hover:bg-[#6366f1] transition text-sm w-full sm:w-auto mt-2 sm:mt-0">
                Remove →
              </button>
            </div>
          ))}
        </div>
      </div>
      <AddAgentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
