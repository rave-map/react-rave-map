
import './App.css'
import ClubList from './components/ClubList'
import CreateClub from './components/CreateClub'
import HomePage from './components/HomePage'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import ClubDetails from "./components/ClubDetails"
import 'bootstrap/dist/css/bootstrap.min.css'

import EditClubList from './components/EditClubList'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubs" element={<ClubList />} />
        <Route path="/createclub" element={<CreateClub />} />
        <Route path="/clubs/:id" element={<ClubDetails />} />
        <Route path="/editclublist/:id" element={<EditClubList />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App