"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import ActiveConversations from "../activeConversations";

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
    id: "56252",
    name: "Quick Car wash",
    address: "B 102, 123 street, Dubai , UAE",
    service: "Tire Wash",
    date: "13/02/24",
    time: "15:35",
    image: "/asset/images/Washta.png",
  },
  {
    id: "89152",
    name: "Quick Car wash",
    address: "B 102, 123 street, Dubai , UAE",
    service: "Tire Wash",
    date: "13/02/24",
    time: "15:35",
    image: "/asset/images/Washta.png",
  },
];

const ratings = [5, 4, 3, 2, 1];
const ratingCounts = [120, 80, 40, 20, 13];
const totalReviews = 273;
const averageRating = 4.5;

const donutData = [60, 25, 15]; // New, Pending, Resolved (percentages)
const donutColors = ["#6c63ff", "#a3a3f7", "#e6e6f0"];
const donutLabels = ["New Request", "Pending", "Resolved"];

function DonutChart({ data, colors }: { data: number[]; colors: string[] }) {
  const total = data.reduce((a, b) => a + b, 0);
  let startAngle = 0;
  const radius = 100;
  const cx = 120;
  const cy = 120;
  const strokeWidth = 24;
  return (
    <svg width="240" height="160" viewBox="0 0 240 240">
      {data.map((value, i) => {
        const angle = (value / total) * 360;
        const x1 = cx + radius * Math.cos((Math.PI * (startAngle - 90)) / 180);
        const y1 = cy + radius * Math.sin((Math.PI * (startAngle - 90)) / 180);
        const x2 = cx + radius * Math.cos((Math.PI * (startAngle + angle - 90)) / 180);
        const y2 = cy + radius * Math.sin((Math.PI * (startAngle + angle - 90)) / 180);
        const largeArc = angle > 180 ? 1 : 0;
        const pathData = [
          `M ${x1} ${y1}`,
          `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
        ].join(" ");
        const segment = (
          <path
            key={i}
            d={pathData}
            fill="none"
            stroke={colors[i]}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              strokeDasharray: `${(angle * Math.PI * radius) / 180} 999`,
              strokeDashoffset: 0,
            }}
          />
        );
        startAngle += angle;
        return segment;
      })}
      <circle
        cx={cx}
        cy={cy}
        r={radius - strokeWidth / 2}
        fill="#fff"
      />
    </svg>
  );
}

export default function ChatSupportDashboard() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col gap-6 p-2 sm:p-4 w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Overall Requests */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-col items-center w-full min-w-0">
          <div className="font-semibold text-lg mb-2">Overall Requests</div>
          <div className="flex flex-col sm:flex-row items-center ">
            <DonutChart data={donutData} colors={donutColors} />
            <div className="mt-4  sm:ml-10 flex flex-col gap-2 w-full max-w-xs">
              {donutLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <span className="inline-block w-4 h-4 rounded-3xl" style={{ background: donutColors[i] }}></span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Rating */}
        <div className="flex flex-col bg-white rounded-xl shadow p-4 items-center w-full min-w-0">
          <div className="font-semibold text-lg mb-2">Rating</div>
          <div className="flex flex-col md:flex-row items-center w-full gap-4">
            <div className="flex flex-col w-full gap-2 max-w-xs">
              {ratings.map((r, i) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="w-4 text-xs">{r}</span>
                  <div className=" rounded h-2 flex-1 mr-2">
                    <div
                      className="bg-[#6c63ff] h-3 rounded"
                      style={{ width: `${(ratingCounts[i] / Math.max(...ratingCounts)) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:ml-6 max-w-xs">
              <div className="font-semibold text-md text-base">{totalReviews}</div>
              <div className="text-sm text-gray-500">Reviews</div>
              <div className="font-semibold text-base mt-1 text-md">{averageRating} <span className="text-[#ffb400]">★</span></div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>
      </div>
      {/* Requests Section */}
      <div className="bg-white rounded-xl shadow p-2 sm:p-4 mt-2 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2 w-full">
          <div className="font-semibold text-lg">Requests</div>
          <button className="bg-[#a3a3f7] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#7b7be6] text-sm w-full sm:w-auto">Add Agent</button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {requests.map((req, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center bg-[#f9f9fb] rounded-lg p-3 gap-2 sm:gap-4 shadow-sm w-full cursor-pointer hover:bg-[#ececff]"
              onClick={() => router.push(`/Chat?requestId=${req.id}`)}
            >
              <img src={req.image} alt={req.name} className="w-14 h-14 rounded-lg object-cover mb-2 sm:mb-0" />
              <div >
                <div className="font-semibold text-base">{req.name}</div>
                <div className="text-xs text-gray-500">{req.address}</div>
              </div>
              <div className="flex flex-wrap gap-2 w-full sm:w-auto md:gap-15 ">
                <div className="min-w-[80px] text-xs md:ml-8">
                  <div className="text-gray-500">Service</div>
                  <div className="font-semibold">{req.service}</div>
                </div>
                <div className="min-w-[80px] text-xs">
                  <div className="text-gray-500">Date</div>
                  <div className="font-semibold">{req.date}</div>
                </div>
                <div className="min-w-[60px] text-xs">
                  <div className="text-gray-500">Time</div>
                  <div className="font-semibold">{req.time}</div>
                </div>
                <div className="min-w-[80px] text-xs">
                  <div className="text-gray-500">Request ID</div>
                  <div className="font-semibold">{req.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
