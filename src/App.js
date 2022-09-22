import { Routes, Route, Navigate } from "react-router-dom";
import './App.scss';
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
