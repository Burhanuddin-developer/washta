import { FaFilter, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

const companies = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'Quick Car wash',
  logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64',
  time: '10:00 AM',
  status: 'Completed',
  spent: 2500,
  currency: 'AED',
}));

const topCompanies = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: 'Quick Car wash',
  processedOrders: 203,
  averageSales: 1500,
  totalSales: 73189,
  currency: 'AED',
}));

function CompanyCard({ name, logo, time, status, spent, currency }: any) {
  return (
    <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex flex-col gap-2 min-w-[220px] max-w-[300px]">
      <div className="flex items-center gap-3 mb-1">
        <Image src={logo} alt={name} width={36} height={36} className="rounded object-cover" />
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

function TopCompanyCard({ name, logo, processedOrders, averageSales, totalSales, currency }: any) {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-blue-100 p-3 mb-2 last:mb-0">
      <div className="flex items-center gap-2 mb-1">
        <div className="font-medium text-sm leading-tight">{name}</div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <div>
          <div>Processed Orders</div>
          <div className="font-bold text-black text-base">{processedOrders}</div>
        </div>
        <div>
          <div>Average Sales</div>
          <div className="font-bold text-black text-base">{averageSales} <span className="text-xs font-medium">{currency}</span></div>
        </div>
        <div>
          <div>Total Sales (30 days)</div>
          <div className="font-bold text-black text-base">{totalSales.toLocaleString()} <span className="text-xs font-medium">{currency}</span></div>
        </div>
      </div>
    </div>
  );
}

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-2">
         <h1 className="text-2xl font-semibold mb-2 sm:ml-8">Companies</h1>
      <div className="flex flex-col lg:flex-row gap-2">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {companies.map((c) => (
              <CompanyCard key={c.id} {...c} />
            ))}
          </div>
        </div>
        {/* Sidebar Section */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                <FaBuilding className="text-blue-500 text-base" />
              </span>
              Top Companies
            </h2>
            <div>
              {topCompanies.map((c) => (
                <TopCompanyCard key={c.id} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}