import { FaClipboardList, FaRegTimesCircle, FaRegChartBar, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['16 Mar', '18 Mar', '20 Mar', '22 Mar', '24 Mar'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 220, 80, 180, 60],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.15)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: '#6366f1',
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: 'black', font: { size: 12 } },
    },
    y: {
      grid: { color: '#f3f4f6' },
      ticks: { color: 'black', font: { size: 12 } },
      beginAtZero: true,
    },
  },
};

const customers = Array(6).fill({
  name: 'Kristin Watson',
  visits: 4,
  spent: 2500,
  img: 'https://randomuser.me/api/portraits/women/44.jpg',
});

const companies = Array(4).fill({
  name: 'Quick Car wash',
  orders: 203,
  avgSales: 1500,
  totalSales: 73189,
});

export default function Dashboard() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 sm:p-4 md:p-2">
      {/* Left: Sales and stats */}
      <div className="lg:col-span-2 flex flex-col gap-4 w-full">
        {/* Total Sales Card */}
        <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2 sm:gap-0">
            <div className="flex items-center">
              <FaClipboardList className="text-blue-500 mr-2 text-lg sm:text-xl" />
              <span className="font-semibold text-black text-base sm:text-lg">Total Sales</span>
            </div>
            <div className="sm:ml-auto flex gap-2 bg-gray-100 mt-2 sm:mt-0">
              <button className="px-2 sm:px-3 py-1 rounded hover:bg-[#a3a3f7] text-black text-sm sm:text-md font-medium">All time</button>
              <button className="px-2 sm:px-3 py-1 rounded hover:bg-[#a3a3f7] text-black text-sm sm:text-md font-medium">Last Month</button>
              <button className="px-2 sm:px-3 py-1 rounded hover:bg-[#a3a3f7] text-black text-sm sm:text-md font-medium">This Week</button>
            </div>
          </div>
          {/* Chart Line */}
          <div className="h-48 sm:h-[15rem] w-full flex items-end">
            <Line data={chartData} options={chartOptions} className="w-full h-full" />
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
            <FaClipboardList className="text-blue-500 text-2xl sm:text-3xl" />
            <div>
              <div className="text-base sm:text-lg">Total Orders</div>
              <div className="text-sm sm:text-md font-semibold">320</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-3 border border-gray-100">
            <FaRegTimesCircle className="text-red-400 text-2xl sm:text-3xl" />
            <div>
              <div className="text-base sm:text-lg">Cancelled Orders</div>
              <div className="text-sm sm:text-md font-semibold">150</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
            <FaRegChartBar className="text-purple-400 text-2xl sm:text-3xl" />
            <div>
              <div className="text-base sm:text-lg">Average Sales</div>
              <div className="text-sm sm:text-md font-semibold">106.67 <span className="text-xs font-normal">AED</span></div>
            </div>
          </div>
        </div>
        {/* Top Customers */}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-lg mb-4 flex items-center gap-2">
            <FaUser className="inline-block text-purple-400 text-xl sm:text-2xl" />
            <h2 className="text-xl sm:text-2xl">Top Customers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customers.map((c, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg border border-gray-300 p-3 sm:p-4 flex flex-col justify-between min-h-[110px]"
              >
                <div className="flex items-center gap-3">
                  <Image src={c.img} alt={c.name} width={40} height={40} className="rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-md sm:text-lg text-gray-900">{c.name}</div>
                    <div className="text-sm sm:text-md text-gray-500">{c.visits} Visits</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 sm:mt-6">
                  <span className="text-sm sm:text-md text-gray-700">Total Spent</span>
                  <span className="font-bold text-md sm:text-lg text-gray-900">{c.spent} <span className="text-xs sm:text-sm font-normal text-gray-500">AED</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Top Companies */}
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="font-semibold text-xl sm:text-2xl mb-4">Top Companies</div>
          <div className="flex flex-col gap-4 ">
            {companies.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3 flex flex-col gap-1 border border-gray-300 space-y-2">
                <div className="font-medium text-base sm:text-lg">{c.name}</div>
                <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                  <span>Processed Orders</span>
                  <span>Average Sales</span>
                  <span>Total Sales (30 days)</span>
                </div>
                <div className="flex justify-between font-bold text-sm sm:text-md">
                  <span>{c.orders}</span>
                  <span>{c.avgSales} <span className="text-xs font-normal">AED</span></span>
                  <span>{c.totalSales.toLocaleString()} <span className="text-xs font-normal">AED</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
