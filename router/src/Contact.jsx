import { Link } from "react-router-dom"


function Contact(){
    return(
        <>
            <h1>Contact Page</h1>
            <button><Link to='/about' className="btn2" >About</Link></button>
        </>
    )
}

export default Contact