import { useState, useEffect } from "react";

interface UseScrollViewportOptions {
  threshold?: number;
}

interface ScrollViewportReturn {
  isScrolledPast: boolean;
  isScrolledBefore: boolean;
  height: number;
  width: number;
}

class ScrollManager {
  private listeners = new Set<(scrollY: number) => void>();
  private scrollY = 0;
  private rafId: number | null = null;
  private isListening = false;

  subscribe(callback: (scrollY: number) => void) {
    this.listeners.add(callback);
    
    if (!this.isListening) {
      this.startListening();
    }
    
    callback(this.scrollY);
    
    return () => {
      this.listeners.delete(callback);
      if (this.listeners.size === 0) {
        this.stopListening();
      }
    };
  }

  private startListening() {
    this.isListening = true;
    this.scrollY = window.scrollY;
    
    const handleScroll = () => {
      if (this.rafId !== null) return;
      
      this.rafId = requestAnimationFrame(() => {
        this.scrollY = window.scrollY;
        this.listeners.forEach(callback => callback(this.scrollY));
        this.rafId = null;
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    this.cleanup = () => {
      window.removeEventListener("scroll", handleScroll);
      if (this.rafId !== null) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    };
  }

  private stopListening() {
    this.isListening = false;
    this.cleanup?.();
  }

  private cleanup?: () => void;
}

const scrollManager = typeof window !== "undefined" ? new ScrollManager() : null;

export function useScrollViewport(options: UseScrollViewportOptions = {}): ScrollViewportReturn {
  const [viewport, setViewport] = useState({
    height: 0,
    width: 0,
  });

  const [scrollState, setScrollState] = useState({
    isScrolledPast: false,
    isScrolledBefore: true,
  });

  useEffect(() => {
    setViewport({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    const updateViewport = () => {
      setViewport({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    if (!scrollManager) return;

    const threshold = options.threshold ?? viewport.height;
    
    const unsubscribe = scrollManager.subscribe((scrollY) => {
      setScrollState({
        isScrolledPast: scrollY >= threshold,
        isScrolledBefore: scrollY <= threshold,
      });
    });

    return unsubscribe;
  }, [options.threshold, viewport.height]);

  return {
    ...scrollState,
    height: viewport.height,
    width: viewport.width,
  };
}