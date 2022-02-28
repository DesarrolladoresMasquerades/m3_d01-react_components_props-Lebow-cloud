import "./NavBar.css"
import React from "react";
import NavButton from "./NavButton";


export default function Navbar (){
    return(
        <nav className="Navbar-big">
            <p>React components and Props</p>
            <NavButton/>
            <NavButton message={"Click me for greens"} color={"green"}/>
            <NavButton message={"Click me for pinkas"} color={"pink"} linkTo={"www.css-tricks.com"}/>
        </nav>
    )
}

