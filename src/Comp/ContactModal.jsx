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
import { ContactLogos } from './ContactLogos'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

export const ContactModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <DIV>
        <Button onClick={onOpen} class="buttonNav">Contact</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader></ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <div>
        
        <div style={{display: "flex"}}>
        <div style={{marginLeft: "8px"}}>
        <EmailIcon w={8} h={8} color='black' /> 
        </div>

        <div style={{marginLeft: "14px", paddingTop: "4px"}}>
        <Text
            fontSize={{ base: 16 }}
            fontFamily={"Poppins,sans-serif"}
          >murmuparmeshwar05@gmail.com</Text> 
        </div>
       
         </div>

         <div style={{display: "flex"}}>
            <div style={{ width: "50px", marginLeft: "4px"}}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAZlBMVEX///8AAAD8/PxPT0+rq6s7Ozvv7+/39/d+fn5lZWXAwMChoaHKyspiYmLZ2dmmpqYODg7i4uJra2tdXV2IiIgnJydCQkKWlpZJSUl2dnYWFhY1NTWzs7PS0tLp6elwcHAuLi4fHx/8JPo2AAAEA0lEQVRoge2b65aqMAyFAW+IgOCFER115v1f8uhRZ7RkN2kbPOusxf7d8tHQNGkbomjQoEGDBrFK6jLPsvFysViOsywv6+Rd5FmdbdbNtoqfVG2b9SarZ72z83QUQ+3arM83yNsKs+9q837Y0w8WfdfHSR1ep/zAf5WWqvBTuneAX1S1ehZIli4jf2ih5IvlxAN+0UFlEm784Fe1wQaod/70OG7qMHruOOVMVVkIfREGv+rDn56G0+P47EtvNehxvPKbgCpjv+rswxfRzyILeTig6LmFsN2ql7EX15aiZclx/ok87j4mUSB28r9MRH980aWktcP6U0vWuid/+hQ0r8TrbyJZ54vnHrmgQyOd/pJpV7x2OQq6pDK65FHzTqct3+kooSeC7IJYR8svttdEYn6BzxVUvxM//gVPP/F5HUm/bEF4s/H5Jz/vAP3CX3Nd2dnHu7xl/Z6tmL4Vl/+zg7dG74TjM8Ofcl8eWv6uMzP8qbU3Fz44OhsA7aGHoUviNuO4tq7M2i3L2uwB0Lb1sacu0pzRGgBb3G9mpfPf/SFruoDPP6zd5HR71MLWtzm9W7Z4xKsXdP2Z5dTIda9Qf6MnjZD1a0x3sfxNUzh+lHXhT+9Ov9iyAQ9DSSdcsHzol/GDALgB7VG8dN6j3AUC4JpunQBrzb2PSOgACFLems6W/Cx/FxUAt3TOU5LBNohOzieQc5Dxxve7/4gIgPS6R/md58nEs8adh9KeR+AV6ASfxndfM/C7P2SOa0y26qQJSvROAFqSjcxJsp7+yIf523s6e53V9GbHxE+ayU2HzoZSovlh8qPmm8fjHG3kg8fRmzZ+d+r1hKenHo63ynix378Tj5P8Lj5Ji/mTirS7PmE8vejSIQfgjdOnnQMehBwQcGm88fCRAx4EXJRuaOPRCRs8nNDFg2QLp5q6eJRqQs/TxaNEG24zdPFomwE3Wap4uMmCW0xVPD5dQuueKh5vsNHxgireUl4BrK+Jt53sAetr4q236v3jbXRwrKiItx8r0oeqenjmUJWefHp47kSdPFBXw+/Z2zRq+Gp4/jKLukzRwleCYh5it6GFp/cXxpO7N0JKeNFFWlT2hRddIxJJlw5eeIkaReYVMrHLMfFsC2orAGQ6/+FzbOpgtOg0+DRa8C7/K8mFuKOcypcUypVeJbi+fZZa0c5N4mn3kFLJ0k2W+6M3jN957Kp8L7qa/T0srzh+z7FfpeB/jh73qtBiyX1QsWRoqegusFQ0CiqURQcJTjp6lglPhPGdk1eRdKVVJB15lIjvU90ieacC+SoNn3KmHH4P8Lp+4CX5OSLt6eeIv7L/GjJK8/5/Tqnzf/ZjzEPJ6fW3oNPbfgsaNGjQoP9ZfwClnDWMOD1KPgAAAABJRU5ErkJggg==" alt="" />
            </div>

            <div style={{marginLeft: "10px", paddingTop: "4px"}}>
            <Text
            fontSize={{ base: 16 }}
            fontFamily={"Poppins,sans-serif"}
          >Galudih, Brindaban Pur, Jharkhand, EastSinghbhum, 832304</Text> 
            </div>
         </div>

         <div style={{display: "flex", marginTop: "5px"}}>
            <div  style={{marginLeft: "10px"}}>
            <PhoneIcon w={7} h={7} color='black' />
            </div>

            <div style={{marginLeft: "14px"}}>
            <Text
            fontSize={{ base: 16 }}
            fontFamily={"Poppins,sans-serif"}
          >+91 9934524961</Text>
            </div>
         </div>

        <div style={{marginTop: "10px"}}>
        <ContactLogos />
        </div>
      </div>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      
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
