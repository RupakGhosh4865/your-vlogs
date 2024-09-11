import  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bg transition duration-500 ease-in-out'>
      <Header />
      <main className='flex-grow p-4' style={{ fontWeight: 'bold', color: '#333' }}>
      <h1 className='text-4xl font-extrabold text-purple-800 mb-4' style={{ textShadow: '2px 2px 4px #999' }}>
          VLOGS: 
        </h1> <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
