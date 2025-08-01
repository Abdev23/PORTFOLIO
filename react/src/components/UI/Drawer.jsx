
import { useRef, useEffect } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';
import './Drawer.css';


const Drawer = ({isOpen, onClose, children}) => {  
  const drawerRef = useRef(null);
  const contentRef = useRef(null);

  useClickOutside(contentRef, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    }
    else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className={`drawer ${isOpen ? '': 'hidden'}`}
         id='drawer'
         ref={drawerRef}
    >
			<div className='drawer-content'
           id='drawer-content'
           ref={contentRef}
      >
				<div className='drawer-handle'></div>
        { children }
			</div>
    </div>
  );
}


export default Drawer;