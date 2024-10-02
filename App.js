import logo from './logo.svg';
import './style/style.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobForm';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/add-job" element={<AddJobForm />} />
      <Route path="/jobs" element={<JobList />} />
    </Routes>
  </Router>
);
}

export default App;
