import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar';

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
    </>
  );
}

export default App;
