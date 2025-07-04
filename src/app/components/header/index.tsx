import { FaBell } from "react-icons/fa"
const customers = [
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "John Doe"
  }
];

export function Header() {
  return (
    <>
      {/* Header Bar */}
      <div className="flex justify-between px-4 bg-[#f5f6fa]">
        <span className="text-xl ml-5 font-semibold text-black">Dashboard</span>
        <div className="flex items-center gap-2">
          <div className="relative">
            <FaBell className="text-2xl text-[#a3a3f7]" />
          </div>
          <img src={customers[0].img} alt={customers[0].name} width={38} height={32} className="rounded-full object-cover" />
        </div>
      </div>
    </>
  );
}