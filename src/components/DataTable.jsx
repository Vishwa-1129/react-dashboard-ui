import React, { useState } from "react";

const dummyData = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  { id: 3, name: "Bob Johnson", role: "Viewer", status: "Active" },
  { id: 4, name: "Alice Lee", role: "Admin", status: "Pending" },
];

const DataTable = () => {
  const [filter, setFilter] = useState("");

  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name..."
        className="mb-4 p-2 border rounded w-full"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="border p-2">{row.id}</td>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.role}</td>
              <td className="border p-2">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
