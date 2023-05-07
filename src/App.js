import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};