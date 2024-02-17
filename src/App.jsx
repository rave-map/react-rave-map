import { useState } from 'react'
import './App.css'
import ClubList from './components/ClubList'
import CreateClub from './components/CreateClub'
import HomePage from './components/HomePage'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import ClubDetails from "./components/ClubDetails";
function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubs" element={<ClubList />} />
        <Route path="/createclub" element={<CreateClub />} />
        <Route path="/clubs/:clubId" component={ClubDetails} />
      </Routes>
    </div>
  )
}

export default App