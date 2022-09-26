import { Routes, Route, Navigate } from "react-router-dom";
import './App.scss';
import { Home } from "./pages/Home/Home";
import { Features } from "./pages/Features/Features";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";

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
