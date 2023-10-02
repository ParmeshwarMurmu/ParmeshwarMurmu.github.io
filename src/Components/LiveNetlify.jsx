import React from 'react'
import styled from 'styled-components'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'

export const LiveNetlify = ({netlify}) => {
    return (
        <DIV>
            <Link href={netlify} target='_blank' style={{ textDecoration: 'none' }}>
            <button class="button">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ExternalLinkIcon />
                </svg>
                <p class="text">Live</p>
            </button>
            </Link>
        </DIV>
    )
}

const DIV = styled.div`
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 22px;
  gap: 15px;
  background-color: #3ff30d;
  outline: 3px #17f203 solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
}

.button .text {
  color: #181717;
  /* color: white; */
  font-weight: 700;
  font-size: 1em;
  transition: 400ms;
}

.button svg path {
  transition: 400ms;
}

.button:hover {
  /* background-color:  lightgreen; */
  background-color:  ${props => (props.theme === "lightTheme" ? "#3ff30d" : "#f1f8ef")}
}

.button:hover .text {
  color: #181717;
}

.button:hover svg path {
  fill: #181717;
}
    
`
