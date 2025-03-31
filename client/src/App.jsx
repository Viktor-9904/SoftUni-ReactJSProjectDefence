import './App.css'
import { Routes, Route } from 'react-router'
import Header from './components/Header/header'
import Pets from './components/Catalog/pet-catalog'
import Home from './components/Home/home'
import PetDetails from './components/Details/Pet-Details'

export default function App() {

  return (
    <div className="bg-orange-100">

      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/pets/details/:petId' element={<PetDetails />} />
        </Routes>
      </main>
    </div>
  )
}
