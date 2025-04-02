import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { UserContext } from './context/UserContext'

import Header from './components/header/Header'
import Pets from './components/Catalog/pet-catalog'
import Home from './components/home/Home'
import PetDetails from './components/Details/Pet-Details'
import CreatePet from './components/CreatePet/createPet'
import Register from './registerUser/Register'
import Login from './loginUser/Login'

import './App.css'
import Logout from './logout/Logout'


export default function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  };
  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <div className="bg-orange-100">

        <Header />
        <main id="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/pets' element={<Pets />} />
            <Route path='/pets/details/:petId' element={<PetDetails />} />
            <Route path='/put-up-for-adoption' element={<CreatePet />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout/>} />
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  )
}
