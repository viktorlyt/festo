import { Routes, Route, Navigate } from "react-router-dom";
import './App.scss';
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Features } from "./components/Features/Features";
import { Home } from "./components/Home/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
