import React from "react";
import "./Layout.css";

function Layout({top = null, left=null, center=null, right=null}){
    let LeftContainer = left ? "left" : "";
    let RightContainer = right ? "right" : "";

    return (
        <>
            <div id="Layout">
                <div className="top">{top}</div>
                <div className="bottom">
                    <div className={LeftContainer}>{left}</div>
                    <div className="center">{center}</div>
                    <div className={RightContainer}>{right}</div>
                </div>
                
            </div>
        </>
    )
}

export default Layout