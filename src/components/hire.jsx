import reactDOM from "react-dom";
import Card from "./card";
import img from './images/aryan.jpeg'

function Hire(){
    return(
        <div className="row" id="hireRow">
            <div className="col text-center">
            <h1 id="Que">Why you should hire me</h1>
            </div>
        <div className="row my-5">
            <div className="col-lg-4 col-md-4 col-sm-4 px-5">
                <Card
                img={img} 
                title="UI/UX design" 
                text="Got an award for being the best UI designer in college"
                btn="Wanna see my designs"    
                />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 px-5 ">
                <Card 
                img={img}
                title="Backend Developer"
                text="Got an award for being the best UI designer in college"
                btn="trust me bro!"
                />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 px-5">
                <Card 
                img={img}
                title="Frontend Developer"
                text="Got an award for being the best UI designer in college"
                btn="trust me bro!"
                />
            </div> 
        </div>
        <div className="row justify-content-center my-5">
            <div className="col-lg-4 col-md-4 col-sm-4 px-5">
            <Card 
                img={img}
                title="MERN stack developer"
                text="Got an award for being the best UI designer in college"
                btn="trust me bro!"
                />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 px-5">
            <Card 
                img={img}
                title="Database management"
                text="Got an award for being the best UI designer in college"
                btn="trust me bro!"
                />
            </div>
        </div>

        </div>
    );
}


export default Hire;


