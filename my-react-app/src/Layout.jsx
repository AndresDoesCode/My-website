import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

function Layout({top = null, left=null, right=null}){
    let currentLocation = useLocation();

    function showLeft(){
        if(currentLocation.pathname == "/" || currentLocation.pathname == "/AboutUs"){
            return false;
        }
        return true;
    }

    function showRight(){
        if(currentLocation.pathname == "/" || currentLocation.pathname == "/AboutUs"){
            return false;
        }
        return true;
    }

    return (
        <>
            <div id="Layout">
                <div className={currentLocation.pathname == "/" ? "hide" : "top"}>{top}</div>
                <div className="bottom">
                    <div className={showLeft() ? "left" : "hide"}>{left}</div>
                    <div className="center">
                        <Outlet/>
                    </div>
                    <div className={showRight() ? "right" : "hide"}>{right}</div>
                </div>
                
            </div>
        </>
    )
}

export default Layout