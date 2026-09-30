import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './css/App.css'
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NavBar from "./components/NavBar"
import {BookProvider} from "./contexts/BookContexts"

function App() {
  return (
   <BookProvider>
    <div>
     <NavBar />
    <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </main>
   </div>
   </BookProvider>
  )
}

export default App
