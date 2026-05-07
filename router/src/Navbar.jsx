import { Link } from "react-router-dom"


const Navbar=()=>{
    return(
        <>
            <nav>
                <h1>Logo</h1>
                <ul>
                    <li> <Link to='/' className="homee" >Home</Link> </li>
                    <li> <Link to='/about' className="homee" >About</Link> </li>
                    <li> <Link to='/contact' className="homee" >Contact</Link> </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar