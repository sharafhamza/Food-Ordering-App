import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header";
const LayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayOut;
