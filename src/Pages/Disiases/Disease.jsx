import React from "react";
import { Outlet } from "react-router";
import "./Disease.css";

const Disease = () => {
  return (
    <>

      <div className="body-disease">
      </div>

      

      <Outlet />
    </>
  );
};

export default Disease;