import styled from "styled-components"

import {Image, Stack,} from "@chakra-ui/react"

export const SkillsComp = ({ imgSrc }) => {

    return <DIV>

<Stack direction='row'>
  <Image
    boxSize='80px'
    // objectFit='cover'
    src={imgSrc}
    alt='Dan Abramov'
  />
  
</Stack>

    </DIV>
}

const DIV = styled.div`






`

