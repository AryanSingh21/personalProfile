import react from "react";


function Nav() {

    return (
        <div className="navigate">
            <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand" href="#" style={{color:"#0075FF" ,fontWeight:"bold" , fontSize:"1.8rem"}}>Aryan.</a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#toggle" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                
                <div className="collapse navbar-collapse" id="toggle">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " >
                        <li className="nav-item px-3">
                            <a className="nav-link active" style={{fontWeight:"normal" , fontSize:"1.2rem"}} href="#">Work</a>
                        </li>
                        <li className="nav-item px-3" >
                            <a className="nav-link active"style={{fontWeight:"normal" , fontSize:"1.2rem"}} href="#">About</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link active" style={{fontWeight:"normal" , fontSize:"1.2rem"}} href="#">Contact</a>
                        </li>
                        <li className="nav-item px-3">
                            <button className="nav-link active btn btn-primary" href="#" style={{color:"white"}}>Resume</button>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )


}

export default Nav;