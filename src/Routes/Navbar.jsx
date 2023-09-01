

import { Link } from "react-router-dom";

// import style from "./Nav.module.css"

import { Center,  HStack, Box } from '@chakra-ui/react'
import { Theme } from "../Components/Theme";

import { MenuItems } from "../Components/MenuItems";
import styled from "styled-components";
import { ResumeButton } from "../Components/ResumeButton";
import { ModalComp } from "../Comp/ModalComp";
import { ContactModal } from "../Comp/ContactModal";

function Navbar() {

    return <DIV id="nav-menu">

        <HStack className="nav cont">

            <Center className="theme">
                {/* <Box as='span' fontWeight='bold' fontSize='lg'>
            <Link to="/">Home</Link>
                </Box> */}
                <Theme />

            </Center>

            <Center className="home">
                <Box as='span' fontWeight='bold' fontSize='lg'>
                
                    <Link to="/">
                    <button class="buttonNav">
                        Home 
                        </button>
                    </Link>
                   
                </Box>

            </Center>

            <Center className="skills" id="skills">
                <Box as='span' fontWeight='bold' fontSize='lg'>
                    <Link to="/skills" target="_blank">
                        <button class="buttonNav" >
                            Skills
                        </button>
                    </Link>
                </Box>
            </Center>

            <Center className="project" id="projects">
                <Box as='span' fontWeight='bold' fontSize='lg'>
                    <Link to="/project" target="_blank">
                    <button class="buttonNav">
                        Projects
                        </button>
                    </Link>
                </Box>
            </Center>

            <Center className="about section"  id="about" >
                    <ModalComp />
            </Center>

            <Center className="contact" id="contact">
                <ContactModal />
            </Center>

            <Center className="resume">
                <Box as='span' fontWeight='bold' fontSize='lg'>
                <ResumeButton />
                </Box>
            </Center>

            <Center className="menuItems">
                <Box as='span'>
                    <Link>
                        <MenuItems />
                    </Link>
                </Box>
            </Center>

        </HStack>






    </DIV>

}

export default Navbar;

const DIV = styled.div`

.buttonNav {
  display: inline-block;
  padding: 5px 15px;
  /* background: linear-gradient(45deg, #00b5ff, #005eff); */
  background: #183153;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  /* border-radius: 10px; */
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}

.buttonNav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(100%) rotateX(90deg);
  transition: transform 0.3s ease-in-out;
}

.buttonNav:hover::before {
  transform: translateY(0) rotateX(0);
}

.buttonNav::after {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  border-radius: 15px;
  border: 1px solid #00b5ff;
  z-index: -1;
}

    /* Hover Effect */
.buttonNav:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

    /* Active Effect */
.buttonNav:active {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
}



.cont{
    /* border: 2px solid rgb(243, 255, 8); */
}

/* .allR{
    
    width: 90%;
    margin: auto;
} */

    .menuItems{
        display: none;
    }

    @media screen and (max-width: 1119px) {
      /* Your styles for large devices go here */
      .menuItems{
        display: block;
      }

      .aboutSec{
        display: none;
      }

      .contact{
        display: none;
      }


      
    }

    @media screen and (max-width: 885px) {
      /* Your styles for large devices go here */

      .home{
        display: none
      }

      .skills{
        display: none;
      }
      


      
    }

    @media screen and (min-width: 468px) {
    
     .nav{
    display: flex;
    justify-content: space-around;
     /* background-color: aqua;  */
    height: 50px;
     }
       

    }

    @media screen and (max-width: 622px) {
      /* Your styles for large devices go here */

      .project{
        display: none;
      }


      
    }

    @media screen and (max-width: 467px) {
      /* Your styles for large devices go here */

     .theme{
        margin-right: 20px;
     }


    

     .resume{
        display: none;
     }

     .menuItems{
        /* background-color: yellow; */
        /* display: flex; */
        /* flex-direction: row-reverse; */
        padding-right: 15px;

     }

     .nav{
        /* flex-direction: row-reverse; */
        display: flex;
        justify-content: flex-end;
        /* border: 2px solid red; */
        margin-top: 5px;
        
     }

     
       


      
    }



`