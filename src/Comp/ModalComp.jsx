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
  } from '@chakra-ui/react'
  import styled from "styled-components"

export const ModalComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <DIV>
        <Button onClick={onOpen} class="buttonNav" style={{width: "125%"}}>About</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      ghfghnfghf
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