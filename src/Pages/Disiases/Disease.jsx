import React from "react";
import { Outlet } from "react-router";

const Disease = () => {
  return (
    <>
      <div className="body">
        <h1>Enfermedades</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Disease;
