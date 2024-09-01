import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import FirstScreen from './components/dashboard/FirstScreen/FirstScreen';
import SecondScreen from './components/dashboard/SecondScreen/SecondScreen';
import ThirdScreen from './components/dashboard/ThirdScreen/ThirdScreen';
import FourthScreen from './components/dashboard/FourthScreen/FourthScreen';
import FifthScreen from './components/dashboard/FifthScreen/FifthScreen';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/first" element={<FirstScreen />} />
          <Route path="/dashboard/second" element={<SecondScreen />} />
          <Route path="/dashboard/third" element={<ThirdScreen />} />
          <Route path="/dashboard/fourth" element={<FourthScreen />} />
          <Route path="/dashboard/fifth" element={<FifthScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;