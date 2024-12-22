import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router";


function App() {

  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/type" element={<App />} />
        <Route path="/pokemon" element={<App />} />
      </Routes>

    </BrowserRouter>


  /*<div>
      <NavBar 
        label = 'PokeTienda'
      />

      <ItemListContainer 
        bg = 'white'
        cl= 'red'
        estilo = 'italic'
        tm = '30px'
      />

  </div>
*/

  )
}

export default App
