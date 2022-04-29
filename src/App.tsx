import React from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import About from './pages/About/About'

function App() {
  return (
    <div className="app">
      <h1>APP</h1>
      <div>
        <Link to="/">To Main</Link>
        <Link to="/about">To About</Link>
      </div>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
