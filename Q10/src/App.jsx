import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/quiz"/>}/>
        <Route path="/login" element={<Login />} />
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
