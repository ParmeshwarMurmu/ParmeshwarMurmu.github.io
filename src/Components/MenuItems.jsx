import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  useDisclosure,

} from '@chakra-ui/react'


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react'

import { Hamberg } from './Hamberg'
import styled from "styled-components"
import { Link } from 'react-router-dom'

import { ContactModal } from '../Comp/ContactModal'
import { ModalComp } from '../Comp/ModalComp'
import ParmeshwarMurmuResume from '../Images/Parmeshwar-Murmu-Resume.pdf'


export const MenuItems = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const ResumeHandler3 = () => {

    window.open(
      'https://drive.google.com/file/d/1VuYpktkJfHhLJuoRFZf4bTye4sqX7hOM/view?usp=drive_link',
      "_blank"
    )
    
    // const url ='https://cors-anywhere.herokuapp.com/https://drive.google.com/file/d/1VuYpktkJfHhLJuoRFZf4bTye4sqX7hOM/view?usp=drive_link'
    const url = ParmeshwarMurmuResume


    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `Parmeshwar-Murmu-Resume.pdf`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }


  const ResumeHandler = ()=>{
    window.open(
      'https://drive.google.com/file/d/1VuYpktkJfHhLJuoRFZf4bTye4sqX7hOM/view?usp=drive_link',
      "_blank"
    )

    const url = ParmeshwarMurmuResume


    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `Parmeshwar-Murmu-Resume.pdf`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });

  }


  return (
    <DIV>
      <Menu>
        <MenuButton >
          <Hamberg />
        </MenuButton>
        <MenuList>

        <MenuItem className='homeSection'>
            <Link to="/">
              <button class="buttonNav" style={{width: "57%"}}>
                Home
              </button>
            </Link>
          </MenuItem>


          <MenuItem className='skillsSection'>
            <Link to="/skills" >
              <button class="buttonNav" style={{width: "57%"}}>
                skills
              </button>
            </Link>
          </MenuItem>

          <MenuItem className='projectsSection'>
            <Link to="/project" >
              <button class="buttonNav">
                Projects
              </button>
            </Link>
          </MenuItem>


          <MenuItem>
            {/* <ModalComp /> */}

            <div>

{/* <ModalComp /> */}


<Button onClick={onOpen} class="buttonNav" style={{ width: "125%" }}>About</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader></ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <div >
        <Text
          // id="user-detail-intro"
          fontFamily={"Poppins,sans-serif"}
          fontSize={{ base: 18 }}
          fontWeight='bold'
          letterSpacing='wide'
          id="user-detail-intro"
        >
          Skilled Full Stack Web Developer proficient in MERN stack,  Demonstrated expertise in HTML, CSS, JavaScript, React, Node.js, and MongoDB. Hands-on experience in executing projects, emphasizing attention to detail and problem-solving abilities. A collaborative team player committed to delivering impactful solutions.
        </Text>
      </div>

      <div style={{marginTop: "20px"}}>
        <button className='abtButton  ' type="button"  onClick={ResumeHandler}
          style={{
            position: "relative",
            width: "150px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            border: "1px solid #17795E",
            backgroundColor: "#209978",
            overflow: "hidden"
          }}
        >
          <span class="abtButton__text " style={{
            transition: "all 0.3s",
            transform: "translatex(22px)",
            color: "#fff",
            fontWeight: "600",
            textDecoration: "none"
          }}
          >RESUME</span>

          <span style={{
            transition: "all 0.3s",
            position: "absolute",
            transform: "translatex(109px)",
            height: "100%",
            width: "39px",
            backgroundColor: "#17795E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none"
          }}
          ><svg style={{ width: "20px", fill: "#fff" }}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
        </button>

      </div>



    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
  
    </ModalFooter>
  </ModalContent>
</Modal>

</div>


          </MenuItem>


          <MenuItem>
            
            <ContactModal />
          </MenuItem>

          <MenuItem>
            
          <Box as='span' fontWeight='bold' fontSize='lg' className='resumeSection'>
      
          <button class="button" type="button"  onClick={ResumeHandler3}

          >
            <span class="button__text " >RESUME</span>

            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
          </button>
          
        </Box>
          </MenuItem>

          

          

          
        </MenuList>
      </Menu>
    </DIV>
  )
}

const DIV = styled.div`

.skillsSection{
    display: none;
}

.homeSection{
  display: none;
}

.projectsSection{
  display: none;
}

.resumeSection{
  display: none;
}



@media screen and (max-width: 885px) {
      /* Your styles for large devices go here */

  .skillsSection{
    display: block;
}

.homeSection{
  display: block;
}
         
}

@media screen and (max-width: 621px) {
      /* Your styles for large devices go here */

      .projectsSection{
        display: block;
      }


      
    }

    @media screen and (max-width: 465px) {
    
    
    .resumeSection{
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
