import { FaFilter } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';

const customers = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'Kristin Watson',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  time: '10:00 AM',
  status: 'Completed',
  spent: 2500,
  currency: 'AED',
}));

const topCustomers = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: 'Kristin Watson',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  visits: 4,
  spent: 2500,
  currency: 'AED',
}));

function CustomerCard({ name, avatar, time, status, spent, currency }: any) {
  return (
    <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex flex-col gap-2 min-w-[150px] max-w-[300px]">
      <div className="flex items-center gap-3 mb-1">
        <Image src={avatar} alt={name} width={36} height={36} className="rounded-full object-cover" />
        <div>
          <div className="font-semibold text-base leading-tight">{name}</div>
          <div className="text-xs text-gray-500 mt-0.5">{time}</div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-600 mb-1">
        <span>Status</span>
        <span className="font-semibold text-black">{status}</span>
      </div>
      <div className="flex justify-between items-end mt-2">
        <span className="text-xs text-gray-500">Total Spent</span>
        <span className="font-bold text-xl">{spent} <span className="text-xs font-medium">{currency}</span></span>
      </div>
    </div>
  );
}

function TopCustomerCard({ name, avatar, visits, spent, currency }: any) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg border border-blue-100 p-3 mb-2 last:mb-0">
      <div className="flex items-center gap-2">
        <Image src={avatar} alt={name} width={32} height={32} className="rounded-full object-cover" />
        <div>
          <div className="font-medium text-sm leading-tight">{name}</div>
          <div className="text-xs text-gray-500">{visits} Visits</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs text-gray-500">Total Spent</div>
        <div className="font-bold text-base">{spent} <span className="text-xs font-medium">{currency}</span></div>
      </div>
    </div>
  );
}

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-2">
      <h1 className="text-2xl font-semibold mb-2 sm:ml-8">Customers</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Section */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search by service provider"
              className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="p-2 rounded bg-gray-100 border border-gray-300 hover:bg-gray-200">
              <FaFilter className="text-gray-500" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {customers.map((c) => (
              <CustomerCard key={c.id} {...c} />
            ))}
          </div>
        </div>
        {/* Sidebar Section */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                <FaUserFriends className="text-blue-500 text-base" />
              </span>
              Top Customers
            </h2>
            <div>
              {topCustomers.map((c) => (
                <TopCustomerCard key={c.id} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}