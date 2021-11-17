import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import { useState, useEffect } from 'react';
import Axios from './utils/axiosInstance';
import './App.css';
import AdminView from './views/AdminView';
import HomeTest from './views/HomeTest';
import NavBar from './components/UI/NavBar';

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  return (
      <AuthContext.Provider value={{
        user: user,
        accessToken: token,
        setUser: setUser,
        setToken: setToken
      }}>
        <BrowserRouter>
        <NavBar />
            <Routes>
              <Route path="/" element={<HomeTest />} />
              <Route path="/admin" element={<AdminView />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
  );
}

export default App;
