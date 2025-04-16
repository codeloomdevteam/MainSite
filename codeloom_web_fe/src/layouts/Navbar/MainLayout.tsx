import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <div className="mx-[5%] font-Inter">
        <div className="mt-30"></div>
        <main>
          <Outlet />
        </main>
        <div className="mt-30"></div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
