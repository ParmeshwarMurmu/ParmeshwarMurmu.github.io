import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

} from '@chakra-ui/react'
import { Hamberg } from './Hamberg'
import styled from "styled-components"
import { Link } from 'react-router-dom'

import { ContactModal } from '../Comp/ContactModal'
import { ModalComp } from '../Comp/ModalComp'


export const MenuItems = () => {
  return (
    <DIV>
      <Menu>
        <MenuButton >
          <Hamberg />
        </MenuButton>
        <MenuList>

        <MenuItem className='home'>
            <Link to="/">
              <button class="buttonNav" style={{width: "57%"}}>
                Home
              </button>
            </Link>
          </MenuItem>


          <MenuItem className='skills'>
            <Link to="/skills">
              <button class="buttonNav" style={{width: "57%"}}>
                skills
              </button>
            </Link>
          </MenuItem>

          <MenuItem className='project'>
            <Link to="/project">
              <button class="buttonNav">
                Projects
              </button>
            </Link>
          </MenuItem>


          <MenuItem>
            {/* <Link to="/about">
              <button class="buttonNav">
                About
              </button>
            </Link> */}
            <ModalComp />
            
          </MenuItem>
          <MenuItem>
            {/* <Link to="/contact">
              <button class="buttonNav">
                Contact
              </button>
            </Link> */}
            <ContactModal />
          </MenuItem>

          

          

          
        </MenuList>
      </Menu>
    </DIV>
  )
}

const DIV = styled.div`

.skills{
    display: none;
}

.home{
  display: none;
}

.project{
  display: none;
}


@media screen and (max-width: 885px) {
      /* Your styles for large devices go here */

      .skills{
    display: block;
}

.home{
  display: block;
}
         
}

@media screen and (max-width: 621px) {
      /* Your styles for large devices go here */

      .project{
        display: block;
      }


      
    }
    
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

`
