import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import { FaHome, FaBitcoin, FaUsers}from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

function Layout(){
    let currentLocation = useLocation();

    return (
        <>
            <div id="Layout">
                <div className={currentLocation.pathname == "/" ? "hide" : "top"}>
                    <div className="navBarElements">
                        <Link style={{ textDecoration: "none" }} to="/">
                            <p className="navBarFont"><FaHome/> Home Page</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/how-to-use">
                            <p className="navBarFont"><FiBookOpen/>How to Use</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/crypto-tracking">
                            <p className="navBarFont"><FaBitcoin/>Coin Search</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/AboutUs">
                            <p className="navBarFont"><FaUsers/>About Us</p>
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="center">
                        <Outlet/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Layout