'use client';
import { useState } from 'react';
import {FaChevronDown, FaChevronUp , FaRegClipboard, FaRegClock, FaRegUser, FaRegBell, FaRegMoneyBillAlt, FaRegIdBadge, FaRegCommentDots, FaRegChartBar, FaRegPlusSquare, FaRegFlag, FaSignOutAlt, FaLanguage } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menu = [
  { label: 'Dashboard', icon: <FaRegClipboard />, href: '/Dashboard' },
  {
    label: 'Applications', icon: <FaRegClipboard />, collapsible: true, children: [
      { label: 'Pending', href: '/Pending' },
      { label: 'Approved', href: '/Approved' },
      { label: 'Rejected', href: '/Rejected' },
    ]
  },
  {
    label: 'Job History', icon: <FaRegClock />, collapsible: true, children: [
      { label: 'Customers', href: '/Customers' },
      { label: 'Companies', href: '/Companies' },
    ]
  },
  { label: 'Service Timing', icon: <FaRegClock />, href: '/ServiceTiming' },
  { label: 'Buyer Information', icon: <FaRegUser />, href: '/buyer-information' },
  {
    label: 'Customer Service', icon: <FaRegCommentDots />, collapsible: true, children: [
      { label: 'Buyer', href: '/Buyer' },
      { label: 'Seller', href: '/customer-service/subitem-2' },
    ]
  },
  { label: 'Send Notification', icon: <FaRegBell />, href: '/send-notification' },
  { label: 'Sales', icon: <FaRegChartBar />, href: '/sales' },
  { label: 'Service Fee', icon: <FaRegMoneyBillAlt />, href: '/service-fee' },
  { label: 'Promo Code', icon: <FaRegIdBadge />, href: '/promo-code' },
];

const bottomMenu = [
  { label: 'Add Agent', icon: <FaRegPlusSquare />, href: '/add-agent' },
  { label: 'Language: En', icon: <FaLanguage />, href: '/language' },
  { label: 'Logout', icon: <FaSignOutAlt />, href: '/logout' },
];

export default function Sidebar() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded shadow"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label="Open sidebar"
      >
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </button>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 bg-[#f5f6fa] border-r border-gray-200
          w-64 transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:static lg:translate-x-0 lg:w-56
          min-h-screen flex flex-col justify-between py-4 px-2
        `}
      >
        <div>
          <div className="flex justify-center mb-2 h-18">
            {/* Replace with your logo */}
            <Image src="/asset/images/Washta.png" alt="WASHTA Logo" width={120} height={40} className='text-black' />
          </div>
          <nav>
            <ul className="space-y-1">
              {menu.map((item, idx) => (
                <li key={item.label}>
                  {item.href && !item.collapsible ? (
                    <Link
                      href={item.href}
                      className={`flex items-center w-full px-3 py-2 rounded transition-colors text-sm font-medium gap-2 ${pathname === item.href ? 'bg-[#a3a3f7] text-white' : 'hover:bg-gray-200 text-gray-800'}`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="flex-1 text-left">{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center w-full px-3 py-2 rounded transition-colors text-sm font-medium gap-2 hover:bg-gray-200 text-gray-800`}
                      onClick={item.collapsible ? () => handleToggle(item.label) : undefined}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.collapsible && (
                        open[item.label] ? <FaChevronUp /> : <FaChevronDown />
                      )}
                    </button>
                  )}
                  {item.collapsible && open[item.label] && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          {child.href ? (
                            <Link
                              href={child.href}
                              className={`w-full text-left px-2 py-1 text-xs block ${pathname === child.href ? 'bg-[#a3a3f7] text-white' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <span className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-gray-900 block">
                              {child.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="space-y-1 mt-8">
          {bottomMenu.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center w-full px-3 py-2 rounded transition-colors text-sm font-medium gap-2 hover:bg-gray-200 text-gray-800 ${pathname === item.href ? 'bg-[#a3a3f7] text-white' : ''}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
