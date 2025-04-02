import './App.css'
import { Routes, Route } from 'react-router'
import Header from './components/header/Header'
import Pets from './components/Catalog/pet-catalog'
import Home from './components/home/Home'
import PetDetails from './components/Details/Pet-Details'
import CreatePet from './components/CreatePet/createPet'
import Register from './registerUser/Register'


export default function App() {

  return (
    <div className="bg-orange-100">

      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/pets/details/:petId' element={<PetDetails />} />
          <Route path='/put-up-for-adoption' element={<CreatePet />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<CreatePet />} />
          <Route path='/logout' element={<h1>logout</h1>} />
        </Routes>
      </main>
    </div>
  )
}
