import ReactDom from "react-dom";
import moon from './images/moon.png';


function LMid (){
    return(
        <div className="container-fluid">
            
            <div className="row">
            
                <div className="col-lg-6 col-md-6 col-sm-6 text-center" style={{backgroundColor:"white"}}>
                    <h2>Education</h2>
                    <p>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-center" style={{backgroundColor:"#0075FF"}}>
                    <h2>Work</h2>
                    <p>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <img src={moon} className="moon" ></img>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <p>2. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    
                    
                </div>
            </div>

         </div>
    );
}

export default LMid;