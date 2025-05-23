import { useEffect } from "react";

const ScrollBlocker = () => {
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.scrollY === 0 && e.deltaY > 0) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      window.lastTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (window.scrollY === 0 && e.touches[0].clientY < window.lastTouchY) {
        e.preventDefault();
      }
      window.lastTouchY = e.touches[0].clientY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return null; // No UI needed
};

export default ScrollBlocker;
