import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { GitHubComp } from './GitHubComp'
import { LiveNetlify } from './LiveNetlify'
import styled from "styled-components"


export const ProjectComp = ({ title, image, github, netlify, tech1, tech2, tech3 }) => {
  return (
    <DIV>

      <Box p={4} display={{ md: 'flex' }}>
        <Box flexShrink={0}>

          <Image
            className='ProjectThumbnail'
            borderRadius='lg'
            width={{ md: 280, xl: 400 }}
            height={{ sm: 200, md: 190, xl: 250 }}
            src={image}
            alt={title}
          />



        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight='bold'
            textTransform='uppercase'
            fontSize='sm'
            letterSpacing='wide'
            color='teal.600'
          >
            Marketing
          </Text>
          <Link
            mt={1}
            display='block'
            fontSize='lg'
            lineHeight='normal'
            fontWeight='semibold'
            href='#'
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color='gray.500'>
            Getting a new business off the ground is a lot of hard work. Here are five
            ideas you can use to find your first customers.
          </Text>

          {/* Tech Stack */}

          <div>
            <div>
              <Text
              mt={1}
              display='block'
              fontSize='lg'
              lineHeight='normal'
              fontWeight='semibold'
              >Tech Stack : </Text>
            </div>

            <div>

            <div className='projectSkillsParentDiv'>
              <img className='projectSkillsImages' src={tech1} alt="" />
              <img  className='projectSkillsImages' src={tech2} alt="" />
              <img  className='projectSkillsImages' src={tech3} alt="" />
            </div>
              
            </div>
          </div>

          {/* Github netlifuy */}
          <div className='gitHubNetlify'>
            <div>
              <GitHubComp github={github} />
            </div>
            <div>
              <LiveNetlify netlify={netlify} />
            </div>
          </div>
        </Box>
      </Box>



    </DIV>
  )
}

const DIV = styled.div`

.projectSkillsImages{
    width:40px;
    height: 40px;
    margin-right:5px;
    border-radius: 20px;

}

.projectSkillsParentDiv{
     /* margin:0px 10px 5px 0px; */
     display: flex;
     /* align-items: center; */
     /* border: ${props => (props.theme === "lightTheme" ? "2px solid #000000" : "2px solid #ffffff")}; */
     padding:5px 5px;
     border-radius: 15px;
    
}

.ProjectThumbnail:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  -ms-transform: scale(1.0); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1); 
  cursor: pointer;
}


.gitHubNetlify{
  display: flex;

}

.gitHubNetlify > div{
 margin: 20px 20px 0px 0px ;

}




`