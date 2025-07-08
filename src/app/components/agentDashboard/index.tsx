import React from "react";

const requests = [
  {
    id: "12312",
    name: "Quick Car wash",
    address: "B 102, 123 street, Dubai , UAE",
    service: "Tire Wash",
    date: "13/02/24",
    time: "15:35",
    image: "/asset/images/Washta.png",
  },
  {
    id: "12312",
    name: "John Doe",
    address: "B 102, 123 street, Dubai , UAE",
    service: "Tire Wash",
    date: "13/02/24",
    time: "15:35",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "12312",
    name: "Quick Car wash",
    address: "B 102, 123 street, Dubai , UAE",
    service: "Tire Wash",
    date: "13/02/24",
    time: "15:35",
    image: "/asset/images/Washta.png",
  },
  {
    id: "12312",
    name: "John Doe",
    address: "B 102, 123 street, Dubai , UAE",
    service: "Tire Wash",
    date: "13/02/24",
    time: "15:35",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "12312",
    name: "Quick Car wash",
    address: "B 102, 123 street, Dubai , UAE",
    service: "Tire Wash",
    date: "13/02/24",
    time: "15:35",
    image: "/asset/images/Washta.png",
  },
];

const ratings = [5, 4, 3, 2, 1];
const ratingCounts = [180, 50, 25, 10, 8];
const totalReviews = 273;
const averageRating = 4.5;

const activities = [
  {
    name: "Quick Car wash",
    id: "127212",
    status: "Open",
    time: "15 mins ago",
  },
  {
    name: "Quick Car wash",
    id: "127212",
    status: "Open",
    time: "15 mins ago",
  },
];

export default function AgentDashboard() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-2 sm:p-4 md:p-6 bg-[#f6f7fb]"
    >
      {/* Left: Requests */}
      <div className="flex-1 bg-white rounded-xl p-2 sm:p-4 shadow-md mb-4 lg:mb-0">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
          <div className="font-semibold text-lg sm:text-xl flex items-center gap-2">
            <span role="img" aria-label="requests">📄</span> Requests
          </div>
          <select className="rounded-md px-3 py-1 border border-gray-200 text-sm">
            <option>All Requests</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          {requests.map((req, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center bg-[#f9f9fb] rounded-lg p-3 gap-3 shadow-sm"
            >
              <img
                src={req.image}
                alt={req.name}
                className="w-14 h-14 rounded-lg object-cover mb-2 sm:mb-0"
              />
              <div>
                <div className="font-semibold text-base sm:text-md">{req.name}</div>
                <div className="text-xs sm:text-sm text-gray-500">{req.address}</div>
              </div>
              <div className="min-w-[80px] text-xs sm:text-sm">
                <div className="text-gray-500">Service</div>
                <div className="font-semibold">{req.service}</div>
              </div>
              <div className="min-w-[80px] text-xs sm:text-sm">
                <div className="text-gray-500">Date</div>
                <div className="font-semibold">{req.date}</div>
              </div>
              <div className="min-w-[60px] text-xs sm:text-sm">
                <div className="text-gray-500">Time</div>
                <div className="font-semibold">{req.time}</div>
              </div>
              <div className="min-w-[80px] text-xs sm:text-sm">
                <div className="text-gray-500">Request ID</div>
                <div className="font-semibold">{req.id}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Rating & Activity */}
      <div className="flex-1 flex flex-col gap-2 max-w-full lg:max-w-sm">
        {/* Rating */}
        <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md text-sm max-w-full min-h-[180px]">
          <div className="font-semibold text-base sm:text-lg mb-2">Rating</div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex-1 w-full p-5">
              {ratings.map((r, i) => (
                <div key={r} className="flex items-center gap-2 mb-1 ">
                  <span className="w-4 text-xs">{r}</span>
                  <div className="bg-[#e6e6f0] rounded h-2 flex-1 mr-2">
                    <div
                      className="bg-[#6c63ff] h-2 rounded"
                      style={{ width: `${(ratingCounts[i] / Math.max(...ratingCounts)) * 80}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full sm:w-auto p-5">
              <div className="font-semibold text-base">{totalReviews}</div>
              <div className="text-xs text-gray-500">Reviews</div>
              <div className="font-semibold text-base mt-1">{averageRating} <span className="text-[#ffb400]">★</span></div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
        </div>
        {/* Request Activity */}
        <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md text-sm max-w-full min-h-[180px] md:min-h-[220px]">
          <div className="font-semibold text-base sm:text-lg mb-2">Request Activity</div>
          <div className="flex flex-col gap-2 min-h-[250px]">
            {activities.map((act, i) => (
              <div
                key={i}
                className="bg-[#f9f9fb] rounded-lg p-2 shadow flex flex-col gap-1"
              >
                <div className="flex items-center min-h-[50px]">
                  <div className="font-medium text-lg flex-1">{act.name}</div>
                  <div className="ml-auto text-xs text-gray-500 whitespace-nowrap">{act.time}</div>
                </div>
                <div className="flex md:space-x-30">
                    <div className="text-md text-gray-500 mt-0 ">Request ID: <span className="text-black text-md font-semibold mt-1 flex">{act.id}</span></div>
                <div className=" items-center gap-1 mt-0 text-md text-gray-500 ">
                  Status
                  <span className="text-md font-semibold text-black flex mt-1">{act.status}</span>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
