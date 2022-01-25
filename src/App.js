
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar'
import Home from './common/Home'
import Profile from './common/Profile'
import Login from './auth/Login'
import Register from './auth/Register'
import axios from 'axios'
import CocktailIndex from './cocktails/CocktailIndex'
import CocktailShow from './cocktails/CocktailShow'



function App() {

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/cocktails')
        //console.log(res.data)
        return res.data
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cocktails" element={<CocktailIndex />} />
        <Route path="/cocktails/:cocktailId" element={<CocktailShow />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )


}

export default App
