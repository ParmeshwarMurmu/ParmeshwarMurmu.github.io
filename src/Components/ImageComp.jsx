import {  Wrap, WrapItem } from '@chakra-ui/react';


import { Avatar, } from '@chakra-ui/react'

export const ImageComp = ({boderRadius, src, name, size, boxSize})=>{

    return <>
  <Wrap>
  <WrapItem>
    <Avatar
      size={size}
      name={name}
      src={src}
      boxSize={boxSize}
      borderRadius={boderRadius}
    />
  </WrapItem>
</Wrap>
    </>
}