import { useState } from 'react'
import './App.css'
import ClubList from './components/ClubList'
import CreateClub from './components/CreateClub'
import HomePage from './components/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubs" element={<ClubList />} />
        <Route path="/createclub" element={<CreateClub />} />
      </Routes>
    </div>
  )
}

export default App