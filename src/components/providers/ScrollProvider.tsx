"use client";
import { useEffect } from 'react';
import { useScrollStore } from '@/store';

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const { setScroll, setViewport } = useScrollStore();

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScroll(window.scrollY);
      });
    };

    const handleResize = () => {
      setViewport(window.innerHeight, window.innerWidth);
    };

    handleResize();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [setScroll, setViewport]);

  return <>{children}</>;
};