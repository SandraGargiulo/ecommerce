
//import './App.css'
import { Children, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
//import Title from './components/Title/Title'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/container/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer saludo={'En contrucción..'}  />} />
        <Route path='/categoria/:categoryId' element={<ItemListContainer saludo={'En contrucción..'}  />} />
        <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer/>} />

          <Router path='*' element={<Navigate to='/'/>} />
        </Routes>

    </BrowserRouter>
  )
}

export default App
