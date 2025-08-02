
import { useState, useEffect, useRef } from 'react';

import { 
  HomeIcon,
  AboutIcon,
  ContactIcon,
  ProjectsIcon,
  MoreIcon,
	ThemesIcon,
	ChatbotIcon,
	GameIcon,
} from '../assets/icons';
import { useClickOutside } from '../hooks/useClickOutside';
import './Navbar.css'


const Navbar = ({ onMenuClick }) => {
	const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false);
      }
      else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	useClickOutside(menuContainerRef, () => setIsMenuOpen(false));

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

	const handleDrawerOpen = (drawerId) => {
    onMenuClick(drawerId);
    setIsMenuOpen(false);
  };

  return (
		<div id='navbar'
				 className={`navbar ${isNavVisible ? '' : 'navbar--hidden'}`} 
		>
			<a className='nav-link' href='#home'>
				<span className='nav-link-icon'>
          <HomeIcon />
				</span>
				<span className='nav-link-span'>Home</span>
			</a>
			
			<a className='nav-link' href='#projects'>
				<span className='nav-link-icon'>
          <ProjectsIcon />
				</span>
				<span className='nav-link-span'>Projects</span>
			</a>
			
			<a className='nav-link' href='#about'>
				<span className='nav-link-icon'>
          <AboutIcon />
				</span>
				<span className='nav-link-span'>About</span>
			</a>
			
			<a className='nav-link' href='#contact'>
				<span className='nav-link-icon'>
          <ContactIcon />
				</span>
				<span className='nav-link-span'>Contact</span>
			</a>

			<div className='nav-separator'></div>

			<div className='nav-menu-container' ref={menuContainerRef}>
				<button className='nav-link nav-btn'
								id='nav-btn'
								aria-label='Open Action Menu'
								onClick={toggleMenu}
				>
          <MoreIcon />
				</button>

				<div className={`nav-menu ${isMenuOpen ? '' : 'hidden'}`}
						 id='nav-menu'
				>
					<button className='nav-menu-btn' id='themes-btn'
									onClick={() => handleDrawerOpen('themes')}
					>
						<ThemesIcon />
						<span>Pick a theme</span>
					</button>
		
					<button className='nav-menu-btn' id='chatbot-btn'
									onClick={() => handleDrawerOpen('chatbot')}
					>
						<ChatbotIcon />
						<span>Talk to me</span>
					</button>

					<button className='nav-menu-btn' id='game-btn'
									onClick={() => handleDrawerOpen('game')}
					>
						<GameIcon />
						<span>Mini Game</span>
					</button>
				</div>
			</div>
		</div>
  );
}


export default Navbar;