import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
  } from '@chakra-ui/react'
  import styled from "styled-components"
import { ResumeButton } from '../Components/ResumeButton'

export const ModalComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const ResumeHandler = ()=>{
      window.open(
        'https://drive.google.com/file/d/1VuYpktkJfHhLJuoRFZf4bTye4sqX7hOM/view?usp=drive_link',
        "_blank"
      )
  
    }
  return (
    <DIV >
        <Button onClick={onOpen} class="buttonNav" style={{width: "125%"}}>About</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <div >
      <Text
          fontFamily={"Poppins,sans-serif"}
          fontSize={{ base: 18 }}
          fontWeight='bold'
          letterSpacing='wide'
        >
          Skilled Full Stack Web Developer proficient in MERN stack,  Demonstrated expertise in HTML, CSS, JavaScript, React, Node.js, and MongoDB. Hands-on experience in executing projects, emphasizing attention to detail and problem-solving abilities. A collaborative team player committed to delivering impactful solutions.
        </Text>
      </div>

      <div  className="nav-link resume"  id="resume-button-2" >
      <button class="button" type="button" onClick={ResumeHandler}>
                <span class="button__text resume" >RESUME</span>
                
                <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
            </button>
      
      </div>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
</DIV>
  )
}


const DIV = styled.div`

/* Resume Start */


.button {
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #17795E;
  background-color: #209978;
  overflow: hidden;
  
}

.button, .button__icon, .button__text {
  transition: all 0.3s;
  
}

.button .button__text {
  transform: translateX(22px);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
 
}

.button .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #17795E;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.button .svg {
  width: 20px;
  fill: #fff;
}

.button:hover {
  background: #17795E;
  text-decoration: none;
}

.button:hover .button__text {
  color: transparent;
  text-decoration: none;
}

.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
  text-decoration: none;
}

.button:active .button__icon {
  background-color: #146c54;
  text-decoration: none;
}

.button:active {
  border: 1px solid #146c54;
  text-decoration: none;
}



/* RESUME END */

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