"use client";
import { useState } from 'react';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const defaultTimes = {
  start: '08:00',
  end: '20:00',
};

function formatTime(time: string) {
  const [h, m] = time.split(':');
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12.toString().padStart(2, '0')}:${m} ${ampm}`;
}

export default function ServiceTimingPage() {
  const [specificProvider, setSpecificProvider] = useState(true);
  const [activeDays, setActiveDays] = useState<{ [day: string]: boolean }>({});
  const [times, setTimes] = useState<{ [day: string]: { start: string; end: string } }>(
    { Monday: { ...defaultTimes } }
  );

  const handleToggleDay = (day: string) => {
    setActiveDays((prev) => {
      const newState = { ...prev, [day]: !prev[day] };
      if (!prev[day]) {
        setTimes((prevTimes) => ({ ...prevTimes, [day]: { ...defaultTimes } }));
      }
      return newState;
    });
  };

  const handleTimeChange = (day: string, type: 'start' | 'end', value: string) => {
    setTimes((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: value },
    }));
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-4">Service Timing</h1>
        <div className="flex items-center gap-2 mr-2">
          <span className="text-sm font-medium">Specific Service Provider</span>
          <button
            className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ${specificProvider ? 'bg-[#a3a3f7]' : 'bg-gray-300'}`}
            onClick={() => setSpecificProvider((v) => !v)}
          >
            <span
              className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${specificProvider ? 'translate-x-5' : ''}`}
            />
          </button>
        </div>
      </div>
      {specificProvider && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl p-6 mt-2">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-500">Manage operating schedule for all service providers or specific one</span>
      <button className="bg-[#a3a3f7] text-white px-4 py-2 rounded font-medium text-sm flex items-center gap-1 hover:bg-[#8181e6]">
        Select Service Providers <span className="text-lg">&gt;</span>
      </button>
    </div>
    <div>
      {days.map((day) => (
        <div
          key={day}
          className={`flex items-center py-2 border-b last:border-b-0 ${
            activeDays[day] ? 'font-semibold text-black' : 'text-gray-700'
          }`}
        >
          <div className="flex-1">{day}</div>
          {activeDays[day] ? (
            <div className="flex items-center gap-2">
              <select
                className="border rounded px-2 py-1 text-sm focus:outline-none"
                value={times[day]?.start || defaultTimes.start}
                onChange={e => handleTimeChange(day, 'start', e.target.value)}
              >
                {Array.from({ length: 24 }).map((_, h) => [
                  '00', '15', '30', '45'
                ].map((m) => {
                  const val = `${h.toString().padStart(2, '0')}:${m}`;
                  return <option key={val} value={val}>{formatTime(val)}</option>;
                }))}
              </select>
              <span>-</span>
              <select
                className="border rounded px-2 py-1 text-sm focus:outline-none"
                value={times[day]?.end || defaultTimes.end}
                onChange={e => handleTimeChange(day, 'end', e.target.value)}
              >
                {Array.from({ length: 24 }).map((_, h) => [
                  '00', '15', '30', '45'
                ].map((m) => {
                  const val = `${h.toString().padStart(2, '0')}:${m}`;
                  return <option key={val} value={val}>{formatTime(val)}</option>;
                }))}
              </select>
            </div>
          ) : null}
          <div className="ml-4">
            <button
              className={`w-8 h-5 flex items-center rounded-full p-1 duration-300 ${activeDays[day] ? 'bg-[#a3a3f7]' : 'bg-gray-300'}`}
              onClick={() => handleToggleDay(day)}
            >
              <span
                className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${activeDays[day] ? 'translate-x-3' : ''}`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
      </div>
    
  );
} 