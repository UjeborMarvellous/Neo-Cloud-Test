import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
