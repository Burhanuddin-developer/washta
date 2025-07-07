import Image from 'next/image';

const Data = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  date: '16 May 2024 At 10:00 AM',
  location: 'B1, XYZ Mall Parking, Dubai , UAE',
}));

function PendingCard({ name, avatar, date, location }: { name: string; avatar: string; date: string; location: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 min-w-[250px] max-w-[320px] border border-gray-200">
      <div className="flex flex-col items-center justify-center mb-1">
        <Image src={avatar} alt={name} width={40} height={40} className="rounded-full object-cover mb-2" />
        <div className="font-semibold text-lg leading-tight text-center w-full">{name}</div>
        <div className="text-xs text-gray-500 mt-0.5 text-center w-full">{date}</div>
      </div>
      <div className="flex items-center text-xs text-gray-600 gap-1 mb-2">
        <span>📍</span>
        <span>{location}</span>
      </div>
      <button className="border border-gray-400 rounded w-full py-1 text-sm font-medium mb-2 hover:bg-gray-50">View Documents</button>
      <div className="flex gap-2">
        <button className="flex-1 border border-gray-300 rounded py-1 text-sm font-medium text-gray-700 hover:bg-gray-100">Reject</button>
        <button className="flex-1 rounded py-1 text-sm font-medium text-white bg-[#a3a3f7] hover:bg-[#8181e6]">Accept</button>
      </div>
    </div>
  );
}

export default function Pending() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-2 sm:p-4">
      <h1 className='text-2xl font-semibold mb-2 text-center sm:text-left'>Pending Application</h1>
      <div className="w-full overflow-x-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:w-3xl min-w-[260px]">
          {Data.map((item) => (
            <PendingCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}