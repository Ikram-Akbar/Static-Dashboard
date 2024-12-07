import { FiHome, FiGrid, FiBox, FiUsers, FiClipboard, FiTruck } from "react-icons/fi";
import logo from "../assets/logo.svg"

const icons = {
  grid: <FiGrid />,
  box: <FiBox />,
  users: <FiUsers />,
  clipboard: <FiClipboard />,
  truck: <FiTruck />,
};

const navItems = [
  { name: "Dashboard", icon: <FiHome />, current: true },
  { name: "Resources", type: "label" },  
  { name: "Categories", icon: "grid" },
  { name: "Products", icon: "box" },
  { name: "Customers", icon: "users" },
  { name: "Orders", icon: "clipboard" },
  { name: "Deliveries", icon: "truck" },
];

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-100 w-3/12 border-r border-gray-300">
      <div className="flex flex-row items-center p-4">
        <div className="w-12 h-12  rounded-full mb-3">
          <img src={logo} alt="WeCommerce Logo" />
        </div>
        <div className="mx-2">
          <div className="text-lg font-bold">WeCommerce</div>
          <div className="text-sm text-gray-500">Admin Dashboard</div>
        </div>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) =>
          item.type === "label" ? (
            <div
              key={index}
              className="px-4 py-2 text-xs uppercase text-gray-500"
            >
              {item.name}
            </div>
          ) : (
            <a
              key={index}
              href="#"
              className={`flex items-center px-4 py-2 space-x-3 rounded-lg ${item.current
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-200 text-gray-700"
                }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full ${item.current ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-500"
                  }`}
              >
                {typeof item.icon === "string" ? icons[item.icon] : item.icon}
              </span>
              <span>{item.name}</span>
            </a>
          )
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
