import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="bg-[#F8F8F8]">
        <main className="">
          <Outlet />
        </main>
      </div>
    </>
  );
};
