
//import './App.css'
import * as React from 'react'
import { BrowserRouter, Routers, Route, Navigate } from 'react-router-dom'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/container/CartContainer/CartContainer'
import NavBar from './components/Navbar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routers>
        <Route path='/' element={<ItemListContainer greeting={'En contrucción..'} />} />
        <Route path='/products/:typeId' element={<ItemListContainer greeting={'En contrucción..'} />} />
        <Route path='/products/:detailId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>} />

        <Route path='*' element={<Navigate to='/'/>}/>
      </Routers>
    </BrowserRouter>
  )
}

