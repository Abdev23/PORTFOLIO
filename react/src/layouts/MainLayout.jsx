
import { useState } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Tiles from './Tiles';
import Drawer from '../components/UI/Drawer';
import ThemePicker from '../features/themePicker/ThemePicker';
import Chatbot from '../features/chatbot/Chatbot';
import Game from '../features/game/Game';


const drawerContentMap = {
  themes: <ThemePicker />,
  chatbot: <Chatbot />,
  game: <Game />,
};

const MainLayout = ({ children }) => {
  const [activeDrawer, setActiveDrawer] = useState(null);

  return (
    <>
      <Tiles />
      <Navbar onMenuClick={setActiveDrawer} />
      
      <main id= 'main' className="main">
        {children}
      </main>

      <Drawer isOpen={activeDrawer !== null}
              onClose={() => setActiveDrawer(null)}
      >
        {activeDrawer && drawerContentMap[activeDrawer]}
      </Drawer>

      <Footer />
    </>
  );
};


export default MainLayout;