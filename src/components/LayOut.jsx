import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const LayOut = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};

export default LayOut;
