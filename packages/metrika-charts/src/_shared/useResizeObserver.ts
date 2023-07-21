import React, { useEffect, useRef, useState } from 'react';

interface Size {
   width: number;
   height: number;
}

export function useResizeObserver<T extends HTMLElement>(): [React.RefObject<T>, Size] {
   const ref = useRef<T>(null);
   const [size, setSize] = useState<Size>({ width: 0, height: 0 });

   useEffect(() => {
      if (!ref.current) return;

      const resizeObserver = new ResizeObserver((entries) => {
         const { width, height } = entries[0].contentRect;
         setSize({ width, height });
      });

      const element = ref.current;
      resizeObserver.observe(element);

      return () => {
         resizeObserver.unobserve(element);
      };
   }, []);

   return [ref, size];
}
