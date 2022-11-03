import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </BrowserRouter><div className="App">
      </div></>
  );
}

export default App;
