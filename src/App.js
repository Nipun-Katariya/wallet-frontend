import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/home';
import NewWallet from './pages/newWallet';
import ImportWallet from './pages/importWallet';
import Dashboard from './pages/dasboard';

// Root of our app. Impelements all routes used in the app.
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-wallet" element={<NewWallet />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
