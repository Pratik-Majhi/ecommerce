import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Toaster />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;