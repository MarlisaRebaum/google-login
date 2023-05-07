import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './auth/Login';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};