import { useState } from "react"

function Contact(){

    let [data,setData] = useState('Rishabh')

    function fun(a){
        alert(a)
    }
    return(
        <>
          <h1>Contact Page</h1>
          <button onClick={()=>fun(data)}>Click Here</button><br />
        </>
    )
}

export default Contact