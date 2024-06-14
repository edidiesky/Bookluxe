import { Outlet } from "react-router-dom";
import React from "react";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import DashboardHeader from "@/components/common/dashboardHeader";
const DashboardLayout = () => {
  return (
    <>
      <div className="w-full relative flex">
        <DashboardSidebar />
        <div className="flex flex-col gap-2">
          <DashboardHeader />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
