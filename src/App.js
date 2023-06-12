import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/organism/NavBar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/user/:user' element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
