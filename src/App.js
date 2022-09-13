import React from 'react';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import Navbar from './components/Navbar';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Routes />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;