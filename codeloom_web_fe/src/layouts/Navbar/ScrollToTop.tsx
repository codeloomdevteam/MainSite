import React, { useEffect } from "react";
import { useLocation } from "react-router";

type Props = {};

const ScrollToTop = (props: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // or just window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
