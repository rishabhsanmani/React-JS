import Page from "./Page1.jsx"
import "./App.css"
import Contact from './contact.jsx'
import Home from "./home.jsx"
import About from "./about.jsx"
import { Gallery, Gallery1 } from "./Gallery.jsx"


function App(){
  
  let name = "Rishabh"

  return(
    <div>
      <h1>Hello this is App page</h1>

      <h1 className="app">Hello this is App page</h1>
      
      <br />
      name <br />
      {name}

      <Page />
      <Contact />
      <Home />
      <About />
      <Gallery />
      <Gallery1 />

      
    </div>
  )
}

export default App