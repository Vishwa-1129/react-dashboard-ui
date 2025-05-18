import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-xl font-bold">My Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:text-blue-400">
          Dashboard
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
