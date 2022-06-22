import ReactDom from "react-dom"
// import "../public/mid.css"
import img from "./images/aryan.jpeg"


function Mid(){
    return(
        
        <div className="row">
            <div className="col-lg-6 col-sm-12  " style={{margin : "0px 0px 0px 0px"}}>
                <h1 style={{letterSpacing:"5px",lineHeight:"45px" }}>Make your company fancy as ever and modern as ever.</h1>
                <p style={{fontSize:"1.5em" , letterSpacing:"5px" , paddingTop:"5px"}}>Mordenise your company</p>
                <button className="btn btn-primary">Check me</button>
            </div>
            <div className="col-lg-6 col-sm-12" id="imgcol">
                <img className="prof" src="https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=740&t=st=1655401193~exp=1655401793~hmac=a59ec6747917cc202e9a09c9531b367c133611cfa8e6d18eac435bacdfac3416" style={{border:"solid 1px", boxShadow:"5px 10px 4px #888888"}}></img>
            </div>

        </div>
         
    )
        
    
    
}

export default Mid;