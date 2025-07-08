"use client";
import DashboardLayout from "../layout/dashboard";
import { useState } from "react";

const recipients = [
  { label: "All Agents", value: "agents" },
  { label: "All Buyers", value: "buyers" },
  { label: "All Customers", value: "customers" },
  { label: "Custom Group", value: "custom" },
];

export default function SendNotification() {
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#f6f7ff] flex flex-col items-center p-2 sm:p-4 md:p-6">
        <h2 className="text-2xl mb-2">Send Notification</h2>
        <div className="bg-white rounded-2xl shadow p-2 sm:p-6 w-full max-w-2xl mt-4 border border-gray-200">
          <div className="mb-6">
            <label className="block font-semibold text-gray-700 mb-2">Send To:</label>
            <div className="relative">
              <button
                className="w-full sm:w-80 text-left px-4 py-2 border-b border-gray-300 bg-transparent text-gray-400 focus:outline-none flex items-center justify-between"
                onClick={() => setDropdownOpen((open) => !open)}
                type="button"
              >
                {selected ? recipients.find((r) => r.value === selected)?.label : "Select Recipients"}
                <span className="ml-2">▼</span>
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded shadow mt-1">
                  {recipients.map((r) => (
                    <div
                      key={r.value}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                      onClick={() => {
                        setSelected(r.value);
                        setDropdownOpen(false);
                      }}
                    >
                      {r.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-semibold text-gray-700 mb-2">Enter Message</label>
            <textarea
              className="w-full border-b border-gray-300 bg-transparent p-2 text-gray-700 focus:outline-none resize-none min-h-[100px]"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-2">
            <button
              className="bg-[#7c81f7] text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-[#6366f1] transition w-full sm:w-auto"
              type="button"
            >
              Send Notification &nbsp;→
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}