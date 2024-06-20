import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-700 h-full p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-gray-300 hover:text-white">Dashboard</Link>
        </li>
        <li>
          <Link to="/reports" className="text-gray-300 hover:text-white">Reports</Link>
        </li>
        <li>
          <Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;