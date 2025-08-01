
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import './App.css';


function App() {
  console.log('its my portfolio');

  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  )
}


export default App;