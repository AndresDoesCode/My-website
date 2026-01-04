import { Outlet } from "react-router-dom";
import "./AboutUs.css";
import Me from './assets/Me.jpeg';

function AboutUs(){
    return (
        <>
        <div className="container2">
            <div className="title2">
                <h1 className="TitleFont">About Me</h1>
            </div>
            <div className="bothContainers">
                <div className="leftSideContainer">
                    <img className="img2" src={Me}/>
                </div>
                <div className="rightSideContainer">
                    <div className="capsule2">
                        <p className="indented">
                            Hello, my name is Andres Quesada and I am a student at UIC. With great pleasure, I present to 
                            you the first website that I have created!!!
                            
                            The purpose of this website is for me to learn more about how to use API's and how I could implement 
                            better CSS. This will get me closer to my goal of using fullstack frameworks
                        </p>
                        <p></p>
                        <p className="indented">
                            Aside from coding, I also like to run, play games, and watch anime. Maybe one day, I could make a 
                            website dedicated to those topics!!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs;