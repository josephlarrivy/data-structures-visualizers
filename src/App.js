import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar';

import './App.css'

import { BrowserRouter } from 'react-router-dom';

import ApplicationRoutes from './ApplicationRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='nav-div'>
          <NavBar />
        </div>
        <div className='application-div'>
          <ApplicationRoutes />
        </div>
      </BrowserRouter>
      <div className='footer'>
        <a href='https://josephlarrivy.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
          www.josephlarrivy.com
        </a>
      </div>

    </>
  );
}

export default App;