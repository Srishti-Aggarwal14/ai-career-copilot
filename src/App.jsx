import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Interview from "./pages/Interview";
import Dashboard from "./pages/Dashboard";
import CareerChat from "./pages/CareerChat";
import DSATracker from "./pages/DSATracker";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/resume/:id" element={<Resume />} />

        <Route path="/interview" element={<Interview />} />

        <Route path="/dashboard" element={<Dashboard />}>

        <Route path="profile" element={<Profile />} />

        <Route path="analytics" element={<Analytics />} />

        <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/career-chat" element={<CareerChat />} />

        <Route path="/dsa" element={<DSATracker />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/demo" element={<Demo />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;