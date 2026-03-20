import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Earnings from "./pages/Earnings";
import Plans from "./pages/Plans";
import Simulation from "./pages/Simulation";
import Payout from "./pages/Payout";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}