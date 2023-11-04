import { Box, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GitHubComp } from './GitHubComp'
import { LiveNetlify } from './LiveNetlify'
import styled from "styled-components"
import { AppContent } from '../Context/ContextApi'



export const ProjectComp = ({ title, f1, f2, f3, f4, f5, f6, description, image, github, netlify, tech0, tech1, tech2, tech3, tech4, tech5, tech6, tech7 }) => {
  
  const {theme} = useContext(AppContent)
  
  return (
    <DIV theme={theme} >

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
          <div className="project-title">

            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='lg'
              letterSpacing='wide'
              color='teal.600'
            >
              {title}
            </Text>
          </div>

          <div className="project-description">

          <Text mt={2} color='gray.700' className='project-description' >
            {description}
          </Text>
          </div>


          <Text color='gray.700' mt={1}
            display='block'
            fontSize='lg'
            lineHeight='normal'
            fontWeight='semibold'>
            Features :
          </Text>

          {/* <div>
            <ul>

              <div>
                <li>{f1}</li>
                <li>{f2}</li>
                {
                  f5 && <li>{f5}</li>
                }
              </div>

              <div>
                <li>{f3}</li>
                <li>{f4}</li>
                {
                  f6 && <li>{f6}</li>
                }
              </div>
            </ul>
            and many more..
          </div> */}

          <Text

            fontWeight='bold'
            fontSize='m'
            letterSpacing='wide'
            color='BlackAlpha 500'
            mt={1}

          >
            Collaborative Project
          </Text>

          {/* Tech Stack */}

          <div className='project-tech-stack'>
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

              <div className='projectSkillsParentDiv project-tech-stack'>
                {
                  tech0 && <img className='projectSkillsImages' src={tech0} alt="" />
                }
                { tech1 && <img className='projectSkillsImages' src={tech1} alt="" /> }

                { tech2 && <img className='projectSkillsImages' src={tech2} alt="" /> }
                
                { tech3 && <img className='projectSkillsImages' src={tech3} alt="" /> }

                {
                  tech4 && <img className='projectSkillsImages' src={tech4} alt="" />
                }
                {
                  tech5 && <img className='projectSkillsImages' src={tech5} alt="" />
                }
                {
                  tech6 && <img className='projectSkillsImages' src={tech6} alt="" />
                }
                {
                  tech7 && <img className='projectSkillsImages' src={tech7} alt="" />
                }
              </div>

            </div>
          </div>

          {/* Github netlifuy */}
          <div className='gitHubNetlify'>
            <div className='project-github-link'>
              <GitHubComp github={github} />
            </div>
            <div className='project-deployed-link'>
              <LiveNetlify netlify={netlify} />
            </div>
          </div>
        </Box>
      </Box>



    </DIV>
  )
}

const DIV = styled.div`

ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

li{
  margin-left: 15px;
}

.projectSkillsImages{
    width:40px;
    height: 40px;
    margin-right:5px;
    border-radius: 20px;

}

.projectSkillsParentDiv{
     display: flex;
     padding:5px 5px;
     border-radius: 15px;
     flex-wrap: wrap;
    
}

.ProjectThumbnail:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  -ms-transform: scale(1.0); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
  cursor: pointer;
}


.gitHubNetlify{
  display: flex;

}

.gitHubNetlify > div{
 margin: 20px 20px 0px 0px ;

}

.project-description{
  color: ${props => (props.theme === "lightTheme" ? `#2D3748` : " #ffffff")};
}
  




`