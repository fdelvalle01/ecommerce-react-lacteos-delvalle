import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Navbar from '../components/Navbar/Navbar'
import Cart from '../components/Cart/Cart'
import TableListPrice from '../components/TableListPrice/TableListPrice'


const Rutas = () => {
  return (
    <BrowserRouter>
    
    {/* Las rutas */}
    <Navbar/>
    {/* El principal siempre viene con / esto quiere decir que sera el primero que se carga. */}
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item-detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Home" element={<ItemListContainer/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Lista-Precios" element={<TableListPrice/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default Rutas