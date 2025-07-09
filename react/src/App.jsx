
import Navbar from './layouts/Navbar';
import Tiles from './layouts/Tiles';
import './App.css';


function App() {
  console.log('its my portfolio');

  return (
    <>
      <Tiles />
      <Navbar />

      <div className='main'>
        portfolio
      </div>
    </>
  )
}


export default App;