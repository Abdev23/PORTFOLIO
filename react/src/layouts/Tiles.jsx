
import { useRef } from 'react';

import { useGrid } from '../hooks/useGrid';
import './Tiles.css';


const Tiles = () => {
  const tilesRef = useRef(null);
  const { columns, tiles } = useGrid(tilesRef);

  const renderTiles = () => {
    return Array.from(Array(tiles)).map((_, index) => (
      <div key={index} className='tile'></div>
    ));
  };

  return (
    <div ref={tilesRef}
         id='tiles'
         style={{ '--columns': columns }}
    >
      {renderTiles()}
    </div>
  );
};


export default Tiles;