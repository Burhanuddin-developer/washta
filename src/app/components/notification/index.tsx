import React from "react";

const notifications = {
  today: [
    {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      message: 'you received order for "car washing"',
      type: "order",
      date: "16 May 2024 At 10:00 AM",
    },
    {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      message: "left a review",
      type: "review",
      date: "16 May 2024 At 10:00 AM",
    },
    {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      message: 'sent a message "Are you available right now?"',
      type: "message",
      date: "16 May 2024 At 10:00 AM",
    },
  ],
  yesterday: [
    {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      message: 'you received order for "car washing"',
      type: "order",
      date: "16 May 2024 At 10:00 AM",
    },
    {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      message: "left a review",
      type: "review",
      date: "16 May 2024 At 10:00 AM",
    },
    {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      message: 'sent a message "Are you available right now?"',
      type: "message",
      date: "16 May 2024 At 10:00 AM",
    },
  ],
};

function NotificationSection({ title, items }: { title: string; items: typeof notifications.today }) {
  return (
    <div className="bg-white rounded-2xl shadow p-2 xs:p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 border border-gray-200 w-full max-w-3xl ">
      <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 sm:mb-4 px-1 sm:px-0">{title}</h3>
      <div className="flex flex-col gap-2 sm:gap-3 min-w-[260px]">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col xs:flex-row xs:items-center justify-between bg-[#f8f8fc] rounded-xl p-2 xs:p-3 gap-2 border border-[#e6e6f0] min-w-0"
          >
            <div className="flex items-center gap-2 xs:gap-3 min-w-0 w-full xs:w-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-9 h-9 xs:w-10 xs:h-10 rounded-full object-cover border flex-shrink-0"
              />
              <div className="flex flex-col min-w-0 w-0 flex-1">
                <span className="font-semibold text-gray-800 truncate text-sm xs:text-base">{item.name}</span>
                <span className="text-gray-500 text-xs xs:text-sm truncate">
                  {item.message}
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-400 whitespace-nowrap mt-1 xs:mt-0 px-1 xs:px-0 text-right xs:text-left flex-shrink-0">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Notification() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col gap-2 p-1 xs:p-2 sm:p-4 md:p-6 w-full overflow-x-auto">
      <NotificationSection title="Today" items={notifications.today} />
      <NotificationSection title="Yesterday" items={notifications.yesterday} />
    </div>
  );
}