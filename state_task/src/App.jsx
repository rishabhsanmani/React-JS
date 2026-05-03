import { useState } from "react"

function App(){

  let [text,setText] = useState()

  return(
    <>
      <div>
        <img src="random1.jpg" alt="" onMouseEnter={()=>setText('Rishabh')} onMouseLeave={()=>setText(' ')} />
        <h1 style={{position:"absolute", top:'10px'}}>{text}</h1>
      </div>
    </>
  )
}

export default App