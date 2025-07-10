"use client";
import { useState } from "react";
import Image from "next/image";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const defaultTimes = {
  start: "08:00",
  end: "20:00",
};

function formatTime(time: string) {
  const [h, m] = time.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12.toString().padStart(2, "0")}:${m} ${ampm}`;
}

const mockProviders = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: "Quick Car wash",
  address: "B 102, 123 street, Dubai , UAE",
  logo: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64",
}));

function ServiceProviderModal({
  open,
  onClose,
  providers,
  selected,
  onSelect,
}: any) {
  const [search, setSearch] = useState("");
  const filtered = providers.filter(
    (p: any) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase())
  );
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-2xl mx-2 relative animate-fade-in flex flex-col max-h-[90vh]">
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Search by service provider"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex-1 overflow-y-auto pr-1 mb-4">
          {filtered.map((p: any) => (
            <label
              key={p.id}
              className={`flex items-center gap-3 p-3 mb-3 rounded-xl border ${
                selected.includes(p.id)
                  ? "border-[#a3a3f7] bg-[#f8f8ff]"
                  : "border-gray-200 bg-white"
              } cursor-pointer transition-all`}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={48}
                height={48}
                className="rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base leading-tight">
                  {p.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 truncate">
                  {p.address}
                </div>
              </div>
              <input
                type="checkbox"
                checked={selected.includes(p.id)}
                onChange={() => onSelect(p.id)}
                className="w-5 h-5 accent-[#7c81f7] rounded border-gray-300"
              />
            </label>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <button
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-[#7c81f7] text-white font-medium hover:bg-[#6366f1]"
            onClick={onClose}
          >
            Done &nbsp;→
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default function ServiceTimingPage() {
  const [specificProvider, setSpecificProvider] = useState(false);
  const [activeDays, setActiveDays] = useState<{ [day: string]: boolean }>({});
  const [times, setTimes] = useState<{
    [day: string]: { start: string; end: string };
  }>({ Monday: { ...defaultTimes } });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProviders, setSelectedProviders] = useState<number[]>([]);

  const handleToggleDay = (day: string) => {
    setActiveDays((prev) => {
      const newState = { ...prev, [day]: !prev[day] };
      if (!prev[day]) {
        setTimes((prevTimes) => ({ ...prevTimes, [day]: { ...defaultTimes } }));
      }
      return newState;
    });
  };

  const handleTimeChange = (
    day: string,
    type: "start" | "end",
    value: string
  ) => {
    setTimes((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: value },
    }));
  };

  const handleSelectProvider = (id: number) => {
    setSelectedProviders((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-4 max-w-3xl">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Service Timing
        </h1>
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500">
              Specific Service Provider
            </span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                checked={specificProvider}
                onChange={() => setSpecificProvider((v) => !v)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6 w-full max-w-3xl border border-gray-200 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center flex-1">
            <span className="text-sm font-medium text-gray-500 mr-2 mb-1 sm:mb-0 whitespace-nowrap">
              Specific Service Providers:
            </span>
            <div className="flex gap-2 items-center flex-wrap max-w-full" style={{rowGap: '0.5rem'}}>
              {mockProviders
                .filter((p) => selectedProviders.includes(p.id))
                .map((p, idx) => (
                  <span
                    key={p.id}
                    className="inline-flex items-center bg-[#f6f7ff] border border-gray-300 rounded px-3 py-1 text-xs font-semibold text-gray-800 max-w-xs"
                    style={{ flex: '1 1 30%',  maxWidth: '180px' }}
                  >
                    {p.name}
                    <button
                      className="ml-2 text-gray-400 hover:text-gray-700 text-lg font-bold focus:outline-none"
                      onClick={() => handleSelectProvider(p.id)}
                      aria-label={`Remove ${p.name}`}
                    >
                      &times;
                    </button>
                  </span>
                ))}
            </div>
          </div>
          <button
            className={`px-4 py-2 rounded-lg font-medium shadow transition text-sm mt-2 sm:mt-0 
              ${
                specificProvider
                  ? "bg-[#7c81f7] text-white hover:bg-[#6366f1] cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            disabled={!specificProvider}
            onClick={() => setModalOpen(true)}
          >
            Select Service Providers &nbsp;→
          </button>
        </div>
        <div>
          {days.map((day) => (
            <div
              key={day}
              className={`flex items-center py-2 border-b last:border-b-0 ${
                activeDays[day] ? "font-semibold text-black" : "text-gray-700"
              }`}
            >
              <div className="flex-1">{day}</div>
              {activeDays[day] ? (
                <div className="flex items-center gap-2">
                  <select
                    className="border rounded px-2 py-1 text-sm focus:outline-none"
                    value={times[day]?.start || defaultTimes.start}
                    onChange={(e) =>
                      handleTimeChange(day, "start", e.target.value)
                    }
                  >
                    {Array.from({ length: 24 }).map((_, h) =>
                      ["00", "15", "30", "45"].map((m) => {
                        const val = `${h.toString().padStart(2, "0")}:${m}`;
                        return (
                          <option key={val} value={val}>
                            {formatTime(val)}
                          </option>
                        );
                      })
                    )}
                  </select>
                  <span>-</span>
                  <select
                    className="border rounded px-2 py-1 text-sm focus:outline-none"
                    value={times[day]?.end || defaultTimes.end}
                    onChange={(e) =>
                      handleTimeChange(day, "end", e.target.value)
                    }
                  >
                    {Array.from({ length: 24 }).map((_, h) =>
                      ["00", "15", "30", "45"].map((m) => {
                        const val = `${h.toString().padStart(2, "0")}:${m}`;
                        return (
                          <option key={val} value={val}>
                            {formatTime(val)}
                          </option>
                        );
                      })
                    )}
                  </select>
                </div>
              ) : null}
              <div className="ml-4">
                <button
                  className={`w-8 h-5 flex items-center rounded-full p-1 duration-300 ${
                    activeDays[day] ? "bg-[#a3a3f7]" : "bg-gray-300"
                  }`}
                  onClick={() => handleToggleDay(day)}
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${
                      activeDays[day] ? "translate-x-3" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceProviderModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        providers={mockProviders}
        selected={selectedProviders}
        onSelect={handleSelectProvider}
      />
    </div>
  );
}
