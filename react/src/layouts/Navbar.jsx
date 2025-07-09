
import { 
  MdHome, MdOutlineHome,
  MdContacts, MdOutlineContacts,
  MdWork, MdWorkOutline,
  MdPerson, MdPersonOutline
} from 'react-icons/md';

import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        Home <MdOutlineHome />
      </div>
      <div>
        Projects <MdWorkOutline />
      </div>
      <div>
        About <MdPersonOutline />
      </div>
      <div>
        Contact <MdOutlineContacts />
      </div>
    </div>
  );
}


export default Navbar;