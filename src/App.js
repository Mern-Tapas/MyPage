import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './component/LoginPage';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row vh-100'>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/dashboard' element={<h6>Dashboard</h6>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
