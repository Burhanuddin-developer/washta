import React from "react";

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

export default function AgentProfile() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col gap-6 p-4">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl items-stretch">
        {/* Profile Card */}
        <div className="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6 items-center md:items-start min-w-0">
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold text-black">{agent.name}</h2>
              {/* Edit profile button is above image */}
            </div>
            <div className="mt-4">
              <div className="font-semibold text-lg mb-2">Details</div>
              <div className="flex flex-col gap-3 max-w-80">
                <div className="flex items-center gap-2 bg-[#f5f6fa] rounded-2xl justify-between pl-2">
                  <span className="text-gray-500 text-sm ">Username:</span>
                  <span className=" px-4 py-2 rounded-lg text-md font-semibold">{agent.username}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f5f6fa] rounded-2xl justify-between pl-2">
                  <span className="text-gray-500 text-sm">Role</span>
                  <span className="px-4 py-2 rounded-lg text-md font-semibold">{agent.role}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f5f6fa] rounded-2xl justify-between pl-2">
                  <span className="text-gray-500 text-sm">Joining Date</span>
                  <span className="px-4 py-2 rounded-lg text-md font-semibold">{agent.joiningDate}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center flex-shrink-0 mt-6 md:mt-0">
            <button className="self-end mb-2 bg-[#7c81f7] text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-[#6366f1] transition text-sm">Edit profile &gt;</button>
            <img src={agent.img} alt={agent.name} className="w-36 h-36 rounded-2xl object-cover border-4 border-white shadow" />
          </div>
        </div>
        {/* Rating Card */}
        <div className="w-full md:w-[350px] bg-white rounded-2xl shadow p-6 flex flex-col md:ml-0 md:self-start">
          <div className="font-semibold text-lg mb-2">Rating</div>
          <div className="flex flex-col md:flex-row w-full gap-2 items-start md:items-center">
            <div className="flex flex-col w-full md:w-2/3 gap-2">
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
            <div className="flex flex-col  md:items-center md:w-1/3">
              <div className="font-semibold text-base">{totalReviews}</div>
              <div className="text-xs text-gray-500">Reviews</div>
              <div className="font-semibold text-base mt-1">{averageRating} <span className="text-[#ffb400]">★</span></div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}