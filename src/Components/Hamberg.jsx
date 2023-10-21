import React, { useContext } from 'react'
import styled from 'styled-components';
import { AppContent } from '../Context/ContextApi';

export const Hamberg = () => {
  
  const {theme} = useContext(AppContent)
  console.log("hamBerg Theme", theme)

    return (
        <DIV className='hamberg' theme={theme}>
            <label class="burger" for="burger">
                <input type="checkbox" id="burger" />
                    <span></span>
                    <span></span>
                    <span></span>
            </label>
        </DIV>
    )
}

const DIV = styled.div`

/* .hamberg{
    display: none;
} */



/* media screen */
@media screen and (max-width: 1119px) {
      /* Your styles for large devices go here */
      
    }


    .burger {
  position: relative;
  width: 35px;
  height: 25px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: ${props => (props.theme === "lightTheme" ?  " #000000" : " #eedcdc")};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
`
