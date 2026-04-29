import "./App.css"
import reactimg from './assets/react.svg'

function Page(){
    return(
        <>
          <h1 className="heading1">This is page section</h1>
          <img src={reactimg} alt="" />
        </>
    )
}

export default Page