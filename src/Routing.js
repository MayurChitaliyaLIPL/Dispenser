import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './login';
import SignUp from './registration';  // Import your Registration component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
