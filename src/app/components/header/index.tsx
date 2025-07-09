"use client";
import { FaBell } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title?: string;
  userImg?: string;
  userName?: string;
  children?: React.ReactNode;
  onBellClick?: () => void;
  notifications?: Array<{ name: string; req: string; ago: string; img?: string }>;
}

const defaultUser = {
  img: "https://randomuser.me/api/portraits/women/44.jpg",
  name: "John Doe",
};

export function Header({
  title = "Admin Dashboard",
  userImg = defaultUser.img,
  userName = defaultUser.name,
  children,
  onBellClick,
  notifications = [],
}: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();
  // Close dropdown when clicking outside
  React.useEffect(() => {
    if (!showNotifications) return;
    function handleClick(e: MouseEvent) {
      const dropdown = document.getElementById('notification-dropdown');
      if (dropdown && !dropdown.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showNotifications]);

  return (
    <div className="flex justify-between px-4 bg-[#f5f6fa]">
      <span className="text-xl ml-5 font-semibold text-black">{title}</span>
      <div className="flex items-center gap-2">
        {children}
        <div className="relative">
          <FaBell className="text-2xl text-[#a3a3f7] cursor-pointer" onClick={() => { setShowNotifications((v) => !v); if (onBellClick) onBellClick(); }} />
          {showNotifications && (
            <div id="notification-dropdown" className="absolute right-0 mt-2 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-lg p-4 animate-fade-in border border-[#e6e6f0]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Notifications</span>
                <button className="text-2xl text-gray-400 hover:text-gray-700" onClick={() => setShowNotifications(false)}>&times;</button>
              </div>
              <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
                {(notifications.length > 0 ? notifications : [
                  {name: 'John Doe', req: '127217', ago: '1hr ago', img: '/asset/images/Washta.png'},
                  {name: 'DXB Car Detailing', req: '127217', ago: '1hr ago', img: '/asset/images/Washta.png'},
                  {name: 'DXB Car Detailing', req: '127217', ago: '1hr ago', img: '/asset/images/Washta.png'},
                  {name: 'John Doe', req: '127217', ago: '1hr ago', img: '/asset/images/Washta.png'}
                ]).map((n, i) => (
                  <div key={i} className="flex items-center bg-white border border-[#e6e6f0] rounded-xl p-2 gap-3 shadow-sm">
                    <img src={n.img || "/asset/images/Washta.png"} alt={n.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-semibold text-base">{n.name}</div>
                      <div className="text-xs text-gray-500">Request ID#{n.req}</div>
                    </div>
                    <div className="text-xs text-gray-500 whitespace-nowrap">{n.ago}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a
                  href="/Notifications"
                  className="text-[#7c81f7] text-sm font-medium hover:underline"
                  onClick={e => {
                    e.preventDefault();
                    setShowNotifications(false);
                    if (typeof window !== 'undefined') {
                      localStorage.setItem('showNotification', 'true');
                    }
                    router.push('/Dashboard');
                  }}
                >
                  See All Customer Service Requests &gt;
                </a>
              </div>
            </div>
          )}
        </div>
        <img src={userImg} alt={userName} width={38} height={32} className="rounded-full object-cover" />
      </div>
    </div>
  );
}

export default Header;