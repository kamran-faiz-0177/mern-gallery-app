import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from "./Pages/Gallery";
import Upload from "./Pages/Upload";
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App