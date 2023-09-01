import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { AppContent } from '../Context/ContextApi'





export const Button = ({text}) => {


  const { theme } = useContext(AppContent)

  

  return (
    <DIV theme={theme}>
      

<Button
          
          
        >{text}</Button>
     

    </DIV>
  )
}

const DIV = styled.div`

 /* color: ${props => (props.theme === "lightTheme" ? "#131313" : "#fff")};  */
button {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 background: #183153;
 font-family: "Montserrat", sans-serif;
 box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
 overflow: hidden;
 border: none;

}

button:after {
 content: " ";
 width: 0%;
 height: 100%;
 background: #FFD401;
 position: absolute;
 transition: all 0.4s ease-in-out;
 right: 0;
}

button:hover::after {
 right: auto;
 left: 0;
 width: 100%;
}

button span {
 text-align: center;
 text-decoration: none;
 width: 100%;
 padding: 5px 5px;
 color: #fff;
 font-size: 1.125em;
 font-weight: 700;
 letter-spacing: 0.3em;
 z-index: 20;
 transition: all 0.3s ease-in-out;
 border: ${props => (props.theme === "lightTheme" ? "" : "2px solid #fff")}
}

button:hover span {
 color: #0e0e0f;
 animation: scaleUp 0.3s ease-in-out;
}



@keyframes scaleUp {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.95);
 }

 100% {
  transform: scale(1);
 }
}

    
`


