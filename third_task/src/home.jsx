import "./App.css"

function Nav(){
    return(
        <>
        <nav className="navbar">
          <div className="cn">
            <p className="cName">Zay</p>
          </div>
          <div >
            <ul className="options">
                <li><a href="" className="h">Home</a></li>
                <li><a href="" className="h">About Us</a></li>
                <li><a href="" className="h">Contact Us</a></li>
            </ul>
          </div>
          <div className="btns">
            {/* <button className="Btn1"><a href="" className="sign"> Sign-In </a></button> */}
            <button className="btn1">Sign-In</button>
          </div>
        </nav>
        <div className="hero">
          <p className="section">This is Hero Section </p>
        </div>
        </>
    )
}

export default Nav