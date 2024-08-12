import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UrlShortener from './components/UrlShortener';
import QRCodeDisplay from './components/QRCodeDisplay';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shorten" element={<UrlShortener />} />
        <Route path="/qrcode" element={<QRCodeDisplay url="http://example.com" />} />
      </Routes>
    </Router>
  );
};

export default App;
