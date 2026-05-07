import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Navbar from "./Navbar"
import './App.css'

function App(){
  return(
    <>
    <Navbar />
      <h1>App Page</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App