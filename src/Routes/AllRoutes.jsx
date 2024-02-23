import {Routes, Route, Switch} from "react-router-dom"
// import { Switch } from "@chakra-ui/react";

import Home from "./Home";
import Skills from "./Skills";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import style from "../Styles/Navbar.module.css"
import React from "react";



function AllRoutes(){
    const Switch = ({ children }) => <React.Fragment>{children}</React.Fragment>;

    return <div  className={`${style.allR}`} >
       
        
        
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />}  />
            <Route path="/about" element={<About />}  />
            <Route path="/contact" element={<Contact />}  />
             {/* <Route path='/' element={<Home />}/>
            <Route path="/mySkills" element={<Skills />} /> */}
        </Routes>
    
        
    </div>

}

export default AllRoutes;