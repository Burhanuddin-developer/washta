import Image from 'next/image';

const Data = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  company: 'Quick Car wash',
  address: 'B 102, 123 street, Dubai , UAE',
  logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64',
  service: 'Tire Wash',
  date: '13/02/24',
  time: '15:35',
  requestId: '12312',
}));

export default function BuyerInfo() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-2">
      <h1 className="text-2xl font-semibold mb-4">Customer Service - Buyer</h1>
      <div className="bg-white rounded-2xl p-4 max-w-5xl mshadow-sm border border-gray-200">
        {Data.map((item, idx) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-100 rounded-xl p-4 mb-4 last:mb-0 bg-white"
          >
            <div className="flex items-center gap-3 min-w-[200px]">
              <Image src={item.logo} alt={item.company} width={48} height={48} className="rounded object-cover" />
              <div>
                <div className="font-semibold text-base leading-tight">{item.company}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.address}</div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm w-full">
              <div>
                <div className="text-gray-500">Service</div>
                <div className="font-semibold">{item.service}</div>
              </div>
              <div>
                <div className="text-gray-500">Date</div>
                <div>{item.date}</div>
              </div>
              <div>
                <div className="text-gray-500">Time</div>
                <div>{item.time}</div>
              </div>
              <div>
                <div className="text-gray-500">Request ID</div>
                <div>{item.requestId}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
