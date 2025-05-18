import React from "react";
import DataTable from "../components/DataTable";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Overview</h1>
      <DataTable />
    </div>
  );
};

export default Dashboard;
