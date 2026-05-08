import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Course from "./Course"
import Shop from "./Shop"



function App(){
  return(
    <>
      <h1>App page</h1>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/shop" element={<Shop />} />

      </Routes>
    </>
  )
}

export default App