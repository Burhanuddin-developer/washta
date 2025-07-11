"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface ActiveConversationsProps {
  requestId?: string;
}

export default function ActiveConversations({ requestId }: ActiveConversationsProps) {
  const searchParams = useSearchParams();
  const routeRequestId = searchParams.get("requestId");
  const effectiveRequestId = requestId || routeRequestId || "";

  // Dummy data for demonstration (replace with real data as needed)
  const activeConversations = [
    {
      id: "127212",
      time: "10:00 AM",
      lastMessage: "Will do, thanks again!",
      avatar: "/asset/images/Washta.png",
      messages: [
        {
          sender: "agent",
          text: "Sure thing! Could you provide your current location?",
          time: "16 May 2024 at 10:00 AM",
        },
        {
          sender: "customer",
          text: "Hi, I'm having trouble finding the drop-off spot for my car wash appointment. Can you help?",
          time: "16 May 2024 at 10:00 AM",
        },
        {
          sender: "customer",
          text: "I'm at Main Street and Elm Avenue.",
          time: "16 May 2024 at 10:00 AM",
        },
        {
          sender: "agent",
          text: "Got it. The nearest drop-off spot is behind the gas station on Main Street. Look for our signage there.",
          time: "16 May 2024 at 10:00 AM",
        },
        {
          sender: "agent",
          text: "No problem! Let me know if you need anything else.",
          time: "16 May 2024 at 10:00 AM",
        },
        {
          sender: "customer",
          text: "Thanks!",
          time: "16 May 2024 at 10:00 AM",
        },
      ],
      interactionHistory: [
        {
          status: "Resolved",
          title: "Customer Didn't show up",
          service: "Tire Wash",
          agent: "Franc Lee",
          date: "13/02/24",
          time: "15:35",
        },
        {
          status: "Resolved",
          title: "Customer Didn't show up",
          service: "Tire Wash",
          agent: "Franc Lee",
          date: "13/02/24",
          time: "15:35",
        },
        {
          status: "Resolved",
          title: "Customer Didn't show up",
          service: "Tire Wash",
          agent: "Franc Lee",
          date: "13/02/24",
          time: "15:35",
        },
      ],
    },
    {
      id: "127211",
      time: "10:00 AM",
      lastMessage: "Will do, thanks again!",
      avatar: "/asset/images/Washta.png",
      messages: [],
      interactionHistory: [],
    },
    {
      id: "127210",
      time: "10:00 AM",
      lastMessage: "Will do, thanks again!",
      avatar: "/asset/images/Washta.png",
      messages: [],
      interactionHistory: [],
    },
  ];

  const conversation =
    activeConversations.find((c) => c.id === effectiveRequestId) ||
    activeConversations[0];

  return (
    <div
      className="flex flex-col w-full min-h-[80vh] bg-[#f6f7fb]"
      style={{ minHeight: "100vh" }}
    >
      {/* Header above all columns */}
      <div className="w-[70%] flex flex-col sm:flex-row items-center py-2 rounded-xl mx-20 sm:gap-0">
        <div className="md:w-50">
          <Image
            src={"/asset/images/Washta.png"}
            width={200}
            height={400}
            alt={"washta"}
            className="w-45 h-20 object-cover"
          />
        </div>
        <div className="sm:text-2xl font-semibold md:ml-20 " style={{ letterSpacing: "0.02em" }}>
          Request ID # {conversation.id}
        </div>
        <button className="bg-[#6c63ff] hover:bg-[#4b47b8]  text-white px-4 sm:px-6 py-2 rounded-lg font-semibold text-base  mt-2 sm:mt-0 w-20 sm:w-auto md:ml-60">
          End Chat <span className="ml-1">&gt;</span>
        </button>
      </div>
      {/* Main content: 3 columns, stack on mobile */}
      <div className="flex flex-col lg:flex-row w-full flex-1 gap-4 max-w-340 mx-auto">
        {/* Left Sidebar: Active Conversations */}
        <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col mb-4 lg:mb-0">
          <div className="font-semibold text-lg mb-4 ml-2">Active Conversations</div>
          <div className="flex flex-col gap-3">
            {activeConversations.map((conv) => (
              <div
                key={conv.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer bg-white shadow-sm border border-[#ececff] ${
                  conv.id === effectiveRequestId ? "ring-2 ring-[#6c63ff]" : ""
                }`}
              >
                <img
                  src={conv.avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-semibold text-sm truncate">
                    Request ID#{conv.id}
                  </span>
                  <span className="text-xs text-gray-500 truncate">
                    {conv.lastMessage}
                  </span>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {conv.time}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col items-center bg-white rounded-2xl mb-4 lg:mb-0">
          <div
            className="flex-1 w-full max-w-3xl flex flex-col gap-4 pb-4 pt-8"
            style={{ minHeight: "320px" }}
          >
            {/* Chat Messages */}
            {conversation.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "customer" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-xl px-4 sm:px-5 py-3 text-base max-w-[90%] sm:max-w-[50%] min-w-[100px] border ${
                    msg.sender === "customer"
                      ? " border-[#d6d6f7] text-[#444] shadow-sm m-2 sm:m-4"
                      : "bg-[#f6f7fb] border-[#d6d6f7] text-[#444] m-2 sm:m-4"
                  } relative`}
                >
                  <div>{msg.text}</div>
                  <div className="text-[10px] text-gray-400 mt-2 text-right">
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Message Input */}
          <div className="w-full max-w-3xl flex flex-col gap-2 pb-2 px-2">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <select className="border border-[#d6d6f7] rounded px-3 py-2 text-base text-gray-500 min-w-[140px] bg-white w-full sm:w-auto">
                <option>Select Status</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 relative">
                <input
                  className="w-full border border-[#d6d6f7] rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#a3a3f7]"
                  placeholder="Will do, thanks again!"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#6c63ff] hover:bg-[#4b47b8] text-white rounded-full p-2 flex items-center justify-center shadow transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Panel: Interaction History */}
        <div className="w-full lg:w-[340px] flex-shrink-0 flex flex-col bg-white rounded-xl">
          <div className="font-semibold text-lg mb-4 ml-4 mt-2">
            Interaction History
          </div>
          <div className="flex flex-col gap-4">
            {conversation.interactionHistory.map((item, idx) => (
              <div
                key={idx}
                className=" bg-gray-100 m-4 rounded-xl border border-[#ececff] shadow-sm p-4 flex flex-col  "
              >
                <div className="inline-block px-3 py-1 text-xs rounded-lg border border-green-400 text-green-700 font-semibold mb-1 md:w-20">
                  {item.status}
                </div>
                <div className="font-semibold text-base mb-1">{item.title}</div>
                <div className="flex gap-15 text-xs text-gray-500">
                  <div>
                    Service <span className="font-medium flex text-lg text-black">{item.service}</span>
                  </div>
                  <div>
                    Agent <span className="font-medium flex text-lg text-black">{item.agent}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-18 text-xs text-gray-500">
                  <div>
                    Date <span className="font-medium flex text-lg text-black">{item.date}</span>
                  </div>
                  <div>
                    Time <span className="font-medium flex text-lg text-black">{item.time}</span>
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
