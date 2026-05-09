import { useNavigate } from "react-router-dom"

function Home(){

  let navigate = useNavigate()

  function fun(){
    navigate('/about')
  }

  return(
    <>
       <h1>Home Page</h1>
       <button onClick={fun}>About</button>
    </>
  )
}

export default Home