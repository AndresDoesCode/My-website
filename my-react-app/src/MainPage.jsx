import React from "react";
import Layout from './Layout.jsx'
import "./MainPage.css";
import magnifyingGlass from './assets/Magnifying-Glass.png';

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
                    <p>You cannot touch me fool</p>
                    <p>You cannot touch me fool</p>
                    <p>You cannot touch me fool</p>
                </div>
                <div className="capsule">
                    <h2 style={{textAlign: "center"}}>Coin Search</h2>
                </div>
                <div className="capsule">
                    <h2 style={{textAlign: "center"}}>About Us</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage