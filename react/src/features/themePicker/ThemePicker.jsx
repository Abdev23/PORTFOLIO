
import {
  LightThemeIcon,
  DimThemeIcon,
  DarkThemeIcon
} from '../../assets/icons';
import { useTheme } from '../../hooks';
import './ThemePicker.css';


const THEMES = [
  { name: 'light', Icon: LightThemeIcon, label: 'Light' },
  { name: 'dim', Icon: DimThemeIcon, label: 'Dim' },
  { name: 'dark', Icon: DarkThemeIcon, label: 'Dark' },
];

const ThemePicker = () => {
  const { theme: activeTheme, setTheme } = useTheme();

  return (
    <div className='drawer-option themes-option' id='themes-option'>
      <div className='drawer-header'>
        <h3 className='drawer-title'>Pick a theme</h3>
      </div>

      <div className='drawer-body theme-picker-body'>
        <div className='theme-selectors'>
          {
            THEMES.map(({ name, Icon, label }) => (
              <div key={name}
                   className={`theme-selector ${activeTheme === name ? 'active' : ''}`}
                   onClick={() => setTheme(name)}
                   aria-label={`Switch to ${label} Theme`}
                   data-theme-name={label}
              >
                <Icon className='theme-svg' />
                <p className='theme-name'>{label}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};


export default ThemePicker;