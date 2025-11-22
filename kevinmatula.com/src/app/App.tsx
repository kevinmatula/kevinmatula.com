import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import "./App.css";
import About from "./about/page";
import Home from "./home/page.tsx";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
