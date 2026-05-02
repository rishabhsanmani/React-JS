import { useState } from "react"

function Home(){
    
    let [demo,setDemo] = useState("Rishabh")
    let [sum,setSum] = useState(0)

    function fun(){
        setDemo('Working')
    }

    function inc(){
        setSum(sum+1)
    }

    function dec(){
        if (sum>0){
        setSum(sum-1)
        }
        else{
            alert('Not less than zeroooo....')
        }
    }

    function clr(){
        setSum(0)
    }


    return(
        <>

          <h1>This is home page - {demo} </h1>
          <button onClick={fun}>Click Here</button><br />

          <h1> {sum} </h1>
          <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
          <button onClick={clr}>Clear</button><br /><br />

        </>
    )
}

export default Home