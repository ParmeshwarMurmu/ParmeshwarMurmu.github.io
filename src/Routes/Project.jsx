import { Text } from "@chakra-ui/react";
import { ProjectComp } from "../Components/ProjectComp";
import styled from "styled-components"

function Project(){

    return <DIV id="projects">

    {/* Project Section */}
    <div className='Project' style={{ margin: "auto" }}>
      <div>
        <Text
          fontSize={{ base: 30, sm: 30, md: 30, xl: 50, }}
          style={{ textAlign: "center", textDecoration: "underline" }}
          fontFamily={"Poppins,sans-serif"}
          fontWeight={"600"}

        >Projects</Text>
      </div>

      <ProjectComp title={"Thunder Tech"} Image={""} github={"https://github.com/Hasims2001/synonymous-nose-6503"}
        netlify={"https://thundertech.vercel.app/"}
      />


      <ProjectComp title={"TravelWiz"} image={""} github={"https://github.com/ParmeshwarMurmu/imaginary-carpenter-5479"}
        netlify={"https://calm-seahorse-616fbc.netlify.app/"}
      />


      <ProjectComp />



      <ProjectComp />


    </div>
    </DIV>

}

export default Project;

const DIV = styled.div`
    
`