"use client"

import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    if (window) {
      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }

  }, []);

  return screenWidth;
};

export default useScreenSize;