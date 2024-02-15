import React from "react";
import { useState, useEffect } from "react";
const ScrollHook = (threshHold = 10) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > threshHold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshHold]);
  return scrolled;
};

export default ScrollHook;
