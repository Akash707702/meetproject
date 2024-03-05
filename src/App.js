import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Room from './Components/Room';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Room/:roomId" element={<Room></Room>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
