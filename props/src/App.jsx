import Child1 from "./Child1"
import Child2 from "./Child2"
import Child3 from "./Child3"
import Child4 from "./Child4"


function App(){
  let person = {
    name : 'Rishabh',
    contact : 123546
  }
  return(
    <>
       <h1>THis is app page</h1>
       <Child1 name='Rishabh' age={19} />
       <Child2 city='Bhopal' />
       <Child3 name='Rishabh' contactt={123456} />
       <Child4 variable = {person}/>
    </>
  )
}

export default App