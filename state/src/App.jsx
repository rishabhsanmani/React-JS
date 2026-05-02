import { useState } from "react"
import Home from "./Home"
import Contact from "./Contact"
import Img from "./image"


function App(){


  // syntax:-  let [variable,function] = useState(initial state,value)

  let [data,setData] = useState(10.6)
  let [value,setValue] = useState({name:'Rishabh'})
  let [same,setSame] = useState( ['Rishabh',19] )
  let [color,setColor] = useState()

  function red(){
    setColor('red')
  }
  function yellow(){
    setColor('yellow')
  }
  function blue(){
    setColor('blue')
  }
  function cyan(){
    setColor('cyan')
  }

  return(
    <>
    <div style={{backgroundColor:color}}> 
       <h1>Lorem ipsum dolor sit amet. {data} </h1>
       <h1> {value.name} </h1>
       <h1> {same[1]} </h1>
       <Home />
       <button onClick={red}>Red</button>
       <button onClick={yellow}>Yellow</button>
       <button onClick={blue}>Blue</button>
       <button onClick={cyan}>Cyan</button>
       <button onClick={()=>setColor('brown')}>Brown</button>
    </div>

    <Contact />
    <Img />

    </>
  )
}

export default App