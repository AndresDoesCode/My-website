import React from "react";
import Layout from './Layout.jsx'
import "./MainPage.css";

function MainPage(){
    return(
        <>
        <div className="container">
            {/* <Layout top={<p>Test</p>} center={<p>Test</p>} right={<p>Test</p>}/> */}
            <div className="title">
                <h1 className="gradient-text">Crypto Currency Price Tracker</h1>
            </div>
        </div>
        </>
    )
}

export default MainPage