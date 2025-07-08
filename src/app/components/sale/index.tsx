import Image from 'next/image';

const salesData = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: 'Quick Car wash',
  service: 'Car Wash',
  location: 'B1, ABC Mall; Parking, Dubai, UAE',
  img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64',
}));

function SaleCard({ title, service, location, img }: { title: string; service: string; location: string; img: string }) {
  // Split location into two lines at the first comma
  const [locLine1, locLine2] = location.split(/;(.+)/).filter(Boolean);
  return (
    <div className="bg-white rounded-xl border p-4 border-blue-100  flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image src={img} alt={title} width={40} height={40} className="rounded object-cover" />
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
  return (
    <div className="min-h-screen bg-[#f6f7ff] flex flex-col">
      <h1 className="text-2xl font-medium mb-2 ml-8">Sales</h1>
      <div className="bg-white rounded-2xl p-2 sm:p-4 border border-gray-200 " style={{ width: '75%' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {salesData.map((item) => (
            <SaleCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
