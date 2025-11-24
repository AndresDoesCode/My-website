import React from "react";
import "./MainPage.css";
import magnifyingGlass from './assets/Magnifying-Glass.png';
import Crypto from './assets/bitcoin-symbol-overlaid-on-colorful-financial-graphs-and-candlestick-charts.webp';
import UIC_Logo from './assets/uic-logo.png';
import { Link } from "react-router-dom";


function MainPage(){
    return(
        <>
        <div className="container">
            <div className="title">
                <h1 className="gradient-text">Crypto Currency Price Tracker</h1>
            </div>
            <div className="main-page-bottom">
                <div className="capsule">
                    <h2 style={{textAlign: "center"}}>How to use</h2>
                    <div className="img">
                        <img src={magnifyingGlass} width={"auto"} height={"100%"}/>
                    </div>
                    <p>In here, you will find a step by step guide on how to use this website. This will include</p>
                    <ul>
                        <li>
                            Add more info when possible
                        </li>
                    </ul>
                    
                </div>
                <div className="capsule">
                    <h2 style={{textAlign: "center"}}>Coin Search</h2>
                    <div className="img">
                        <img src={Crypto} width={"auto"} height={"100%"}/>
                    </div>
                    <p>In here, you will find a comprehensive catalog of all coin. Click on them to learn more about their current and historically price evaluations</p>
                </div>
                <div className="capsule">
                    <h2 style={{textAlign: "center"}}>About Us</h2>
                    <div className="img">
                        <img src={UIC_Logo} width={"auto"} height={"100%"}/>
                    </div>
                    <p>For what purpose did I create this website. Click here to learn about the mission, the creater, and interesting tadbits about my journey with my first big website.</p>
                    <Link className="clickMe" to="/AboutUs"><p>Click Me</p></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage