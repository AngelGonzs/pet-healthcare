import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./NavBar.js";

function Layout(){
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;