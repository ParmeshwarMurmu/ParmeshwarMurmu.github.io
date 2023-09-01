import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

export const Name = () => {
    return (
        <DIV>
            <button>
                <span>
                    <Link className='home'>
                       Parmeshwar
                    </Link>
                </span>
            </button>
        </DIV>
    )
}

const DIV = styled.div`

.home{
width: 100%;
border: 2px solid white;
padding: 8px;
}

.home:hover{
    border: 2px solid black;
}

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
 padding: 18px 10px;
 color: #fff;
 font-size: 1.125em;
 font-weight: 700;
 letter-spacing: 0.3em;
 z-index: 20;
 transition: all 0.3s ease-in-out;
}

button:hover span {
 color: #000000;
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