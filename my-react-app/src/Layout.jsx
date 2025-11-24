import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

function Layout({top = null, left=null, right=null}){
    let currentLocation = useLocation();



    let LeftContainer = left ? "left" : "";
    let RightContainer = right ? "right" : "";

    return (
        <>
            <div id="Layout">
                <div className={currentLocation.pathname == "/" ? "hide" : "top"}>{top}</div>
                <div className="bottom">
                    <div className={LeftContainer}>{left}</div>
                    <div className="center">
                        <Outlet/>
                    </div>
                    <div className={RightContainer}>{right}</div>
                </div>
                
            </div>
        </>
    )
}

export default Layout