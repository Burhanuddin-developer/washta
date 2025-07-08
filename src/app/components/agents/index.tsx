const agents = [
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    username: "stacy.kimbler",
    date: "13/02/24",
    role: "Agent",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Agents() {
  return (
    <div className="min-h-screen md:w-4xl bg-[#f6f7ff] flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4 w-full">
          <h2 className="text-2xl font-medium text-gray-800 w-full sm:w-auto text-center sm:text-left">Agents</h2>
          <button className="bg-[#7c81f7] text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-[#6366f1] transition w-full sm:w-auto">Add Agent</button>
        </div>
        <div className="rounded-2xl border border-[#d6d6f7] bg-white p-2 sm:p-4">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl border border-[#d6d6f7] p-2 sm:p-4 mb-4 shadow-sm gap-4"
            >
              <div className="flex flex-col sm:flex-row  gap-2 sm:gap-2 w-full">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover border"
                />
                <span className="font-medium text-md text-gray-800 sm:text-left md:pt-4">
                  {agent.name}
                </span>
                <div className="flex flex-col" style={{width: "80%"}}>
                  <div className="flex flex-col sm:flex-row justify-center md:space-x-15 gap-2 sm:gap-6 mt-1 w-full text-center">
                    <div>
                      <span className="text-xs text-gray-400">Username</span>
                      <div className="text-sm font-semibold text-gray-700">
                        {agent.username}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">
                        Joining Date
                      </span>
                      <div className="text-sm font-semibold text-gray-700">
                        {agent.date}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Role</span>
                      <div className="text-sm font-semibold text-gray-800">
                        {agent.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-[#7c81f7] text-white px-4 py-1 rounded-lg font-medium shadow hover:bg-[#6366f1] transition text-sm w-full sm:w-auto mt-2 sm:mt-0">
                Remove →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
