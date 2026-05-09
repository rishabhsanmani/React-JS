import { Link, Outlet } from "react-router-dom"


function Structure(){
    return(
        <>
            <header>
                <nav>
                    <h1>Logo</h1>
                    <ul>
                        <li> <Link to='/' className="homee" >Home</Link> </li>
                        <li> <Link to='/about' className="homee" >About</Link> </li>
                        <li> <Link to='/contact' className="homee" >Contact</Link> </li>
                    </ul>
                </nav>
            </header>

            <Outlet />

            <footer>
                <h1>Footer Section</h1>
            </footer>
        </>
    )
}

export default Structure