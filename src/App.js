import logo from './logo.svg';
import './App.css';
import Button from './component/button';
import Write from './component/write';
import Home from './pages/Homepage';
import Writenew from './pages/writenew';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Writenew />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
