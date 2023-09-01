import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import Skills from "./Skills";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

import style from "../Styles/Navbar.module.css"

function AllRoutes(){

    return <div  className={`${style.allR}`} >
       
        
        
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    
        
    </div>

}

export default AllRoutes;