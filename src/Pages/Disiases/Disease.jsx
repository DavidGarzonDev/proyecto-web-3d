import React from "react";
import { Outlet } from "react-router";
import "./Disease.css";

const Disease = () => {
  return (
    <>

      <div className="body-disease">
        <h1>Enfermedades</h1>
      </div>

      

      <Outlet />
    </>
  );
};

export default Disease;