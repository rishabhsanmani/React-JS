import { Link } from "react-router-dom"


function About(){
    return(
        <>
            <h1>About Page</h1>
            <button><Link to='/contact' className="btn1" >Contact</Link></button>
        </>
    )
}

export default About