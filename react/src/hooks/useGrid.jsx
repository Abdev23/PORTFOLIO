
import { useState, useEffect } from 'react';


export const useGrid = (tilesRef) => {
  const [grid, setGrid] = useState({ columns: 0, tiles: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      if (!tilesRef.current) return;

      const wrapper = tilesRef.current;
      const size = document.body.clientWidth > 800 ? 80 : 50;
      const columns = Math.floor(wrapper.clientWidth / size);
          
      if (columns === 0) {
        setGrid({ columns: 0, tiles: 0 });
        return;
      }

      const tilePixelSize = wrapper.clientWidth / columns;
      const rows = Math.ceil(wrapper.clientHeight / tilePixelSize);
          
      setGrid({
        columns: columns,
        tiles: columns * rows
      });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);

    return () => {
      window.removeEventListener('resize', calculateGrid);
    };
  }, [tilesRef]);

  return grid;
};