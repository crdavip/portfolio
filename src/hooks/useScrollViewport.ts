import { useState, useEffect, useRef } from "react";

interface UseScrollPastViewportOptions {
  threshold?: number;
}

export function useScrollViewport(options: UseScrollPastViewportOptions = {}) {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isScrolledBefore, setIsScrolledBefore] = useState(true);
  const [viewport, setViewport] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const thresholdRef = useRef<number>(options.threshold ?? viewport.height);

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", updateViewport);
    updateViewport();

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = options.threshold ?? thresholdRef.current;
      setIsScrolledPast(scrollY >= threshold);
      setIsScrolledBefore(scrollY <= threshold);
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [options.threshold]);

  return { isScrolledPast, isScrolledBefore, ...viewport };
}
