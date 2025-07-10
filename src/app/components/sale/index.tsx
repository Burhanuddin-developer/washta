"use client";
import { useState } from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaClipboardList } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["16 Mar", "18 Mar", "20 Mar", "22 Mar", "24 Mar"],
  datasets: [
    {
      label: "Sales",
      data: [120, 220, 80, 180, 60],
      borderColor: "#6366f1",
      backgroundColor: "rgba(99,102,241,0.15)",
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: "#6366f1",
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
      ticks: { color: "black", font: { size: 12 } },
    },
    y: {
      grid: { color: "#f3f4f6" },
      ticks: { color: "black", font: { size: 12 } },
      beginAtZero: true,
    },
  },
};

const salesData = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: "Quick Car wash",
  service: "Car Wash",
  location: "B1, ABC Mall; Parking, Dubai, UAE",
  img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64",
}));

const mockChartData = [
  { date: "16 Mar", value: 10000 },
  { date: "18 Mar", value: 2000 },
  { date: "20 Mar", value: 30000 },
  { date: "22 Mar", value: 15000 },
  { date: "24 Mar", value: 40000 },
];

const mockTableData = Array.from({ length: 7 }).map((_, i) => ({
  date: "13/02/24",
  time: "15:35",
  customer: "John Doe",
  plate: "ABC-1234",
  vehicle: "Jeep",
  status: "Complete",
  serviceProvider: "Quick Car wash",
  location: "B 102, 123 street",
  invoice: "127212",
  netPrice: "AED 20",
  vat: "AED 2",
  vatPercent: "18%",
  platformFee: "AED 2",
  total: "AED 20",
}));

function AnalyticsModal({ open, onClose, sale }: any) {
  if (!open || !sale) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-[#f6f7ff] rounded-2xl shadow-xl p-4 w-full max-w-5xl mx-2 relative animate-fade-in flex flex-col max-h-[95vh] overflow-y-auto">
        <button
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h1 className="text-2xl font-semibold mb-2">{sale.title}</h1>
        <div className="bg-white rounded-3xl mb-5">
           <h2 className="font-semibold pl-4 pt-2">Details</h2>
        <div className="bg-white rounded-xl p-4 mb-4 flex flex-wrap gap-4 items-center justify-center">
          <div className="flex items-center bg-[#f6f7ff] gap-2 rounded-2xl md:w-115 justify-between">
            <span className="text-gray-500 pl-4">Service</span>
            <span className="font-semibold  px-4 py-1 ">
              {sale.service}
            </span>
          </div>
      
          <div className="flex items-center bg-[#f6f7ff] gap-2 rounded-2xl md:w-115 justify-between ">
            <span className="text-gray-500 pl-4">Location:</span>
            <span className="font-semibold  px-4 py-1 ">
              Dubai, UAE
            </span>
          </div>
        </div>
        </div>
        {/* Statistics */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Statistics</h2>
          <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2 sm:gap-0">
              <div className="flex items-center">
                <FaClipboardList className="text-blue-500 mr-2 text-lg sm:text-xl" />
                <span className="font-semibold text-black text-base sm:text-lg">
                  Total Sales
                </span>
              </div>
              <div className="sm:ml-auto flex gap-2 bg-gray-100 mt-2 sm:mt-0">
                <button className="px-2 sm:px-3 py-1 rounded hover:bg-[#a3a3f7] text-black text-sm sm:text-md font-medium">
                  All time
                </button>
                <button className="px-2 sm:px-3 py-1 rounded hover:bg-[#a3a3f7] text-black text-sm sm:text-md font-medium">
                  Last Month
                </button>
                <button className="px-2 sm:px-3 py-1 rounded hover:bg-[#a3a3f7] text-black text-sm sm:text-md font-medium">
                  This Week
                </button>
              </div>
            </div>
            {/* Chart Line */}
            <div className="h-48 sm:h-[15rem] w-full flex items-end">
              <Line
                data={chartData}
                options={chartOptions}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* Details Table */}
        <div className="bg-white rounded-xl p-4 mb-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Details</h2>
            <button className="px-4 py-2 rounded bg-[#7c81f7] text-white font-medium hover:bg-[#6366f1] text-sm">
              Export CSV &gt;
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-left">
              <thead>
                <tr>
                  <th className="px-2 py-2 font-semibold">Date</th>
                  <th className="px-2 py-2 font-semibold">Time</th>
                  <th className="px-2 py-2 font-semibold">Customer Name</th>
                  <th className="px-2 py-2 font-semibold">Plate No.</th>
                  <th className="px-2 py-2 font-semibold">Vehicle</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Service Provider</th>
                  <th className="px-2 py-2 font-semibold">Location</th>
                  <th className="px-2 py-2 font-semibold">Invoice No.</th>
                  <th className="px-2 py-2 font-semibold">Net Price</th>
                  <th className="px-2 py-2 font-semibold">VAT</th>
                  <th className="px-2 py-2 font-semibold">VAT %</th>
                  <th className="px-2 py-2 font-semibold">Platform Fee</th>
                  <th className="px-2 py-2 font-semibold">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {mockTableData.map((row, i) => (
                  <tr key={i} className="border border-gray-300">
                    <td className="px-2 py-2 whitespace-nowrap">{row.date}</td>
                    <td className="px-2 py-2 whitespace-nowrap">{row.time}</td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.customer}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">{row.plate}</td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.vehicle}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.status}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.serviceProvider}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.location}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.invoice}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.netPrice}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">{row.vat}</td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.vatPercent}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {row.platformFee}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaleCard({
  title,
  service,
  location,
  img,
  onClick,
}: {
  title: string;
  service: string;
  location: string;
  img: string;
  onClick: () => void;
}) {
  // Split location into two lines at the first comma
  const [locLine1, locLine2] = location.split(/;(.+)/).filter(Boolean);
  return (
    <div
      className="bg-white rounded-xl border p-4 border-blue-100  flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image
            src={img}
            alt={title}
            width={40}
            height={40}
            className="rounded object-cover"
          />
          <span className="font-semibold text-base">{title}</span>
        </div>
        <span className="text-xl text-gray-400 cursor-pointer">&#8942;</span>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Service</span>
          <span className="font-semibold">{service}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Location</span>
          <span className="text-right block">
            <span className="block">{locLine1}</span>
            <span className="block">{locLine2}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SaleList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState<any>(null);
  return (
    <div className="min-h-screen bg-[#f6f7ff] flex flex-col">
      <h1 className="text-2xl font-medium mb-2 ml-8">Sales</h1>
      <div
        className="bg-white rounded-2xl p-2 sm:p-4 border border-gray-200 "
        style={{ width: "75%" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {salesData.map((item) =>
            selectedSale && selectedSale.id === item.id ? (
              <div key={item.id} className="col-span-1">
                <AnalyticsModal
                  open={true}
                  onClose={() => setSelectedSale(null)}
                  sale={item}
                />
              </div>
            ) : (
              <SaleCard
                key={item.id}
                {...item}
                onClick={() => {
                  setSelectedSale(item);
                }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
