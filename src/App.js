import logo from './logo.svg';
import NavBarController from './components/Navbar/NavBarController';
import Overview from './components/Pages/Overview/Overview';
import Docs from './components/Pages/Docs/Docs';
import './App.css';

function App() {
  return (
    <div>
      <NavBarController />
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/Docs' element={<Docs />} />
        <Route path='/Dapp' element={<Dapp />} />
      </Routes>
    </div>
  );
}

export default App;
