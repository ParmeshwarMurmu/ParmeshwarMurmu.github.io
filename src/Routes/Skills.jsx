
import { Text } from '@chakra-ui/react'
import { styled } from "styled-components"

import HighlightedHeading from '../Components/Technical'
import SoftSkill from '../Components/SoftSkill'
import { useContext } from 'react'
import { AppContent } from '../Context/ContextApi'


function Skills() {

  const { theme } = useContext(AppContent)

  return <DIV theme={theme} id="skills" class="nav-link skills">

    <div className='techSkills' style={{ margin: "auto" }}>



      <div style={{ textAlign: "center" }}>
        <HighlightedHeading size={"lg"} />
      </div>

      <div className='softSkillsOthersParentDiv' style={{ display: "flex", justifyContent: "space-around", }}>

        <div style={{ margin: "10px" }}>
          <div>
            <Text className='heading' textAlign={"center"} color={"black"} fontSize={"28px"} fontFamily={"Poppins,sans-serif"} fontWeight={"600"}>
              FrontEnd
            </Text>
          </div>


          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>



            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
              <p className='skillsPara'> React</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
              <p className='skillsPara'>Redux</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="" />
              <p className='skillsPara'>HTML</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
              <p className='skillsPara'>CSS</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
              <p className='skillsPara'>Java Script</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,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" alt="" />
              <p className='skillsPara'>Type Script</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/jpeg;base64,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" alt="" />
              <p className='skillsPara'>Cypress</p>
            </div>

            <div className='centerLogo'>

              <div class="dot-spinner" >
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
              </div>
            </div>

          </div>

        </div>



        {/* ***************BACKEND ***************** */}
        <div style={{ margin: "10px" }}>

          <div>
            <Text
              textAlign={"center"}
              color={"black"}
              fontSize={"28px"}
              fontFamily={"Poppins,sans-serif"}
              fontWeight={"600"}
              className='heading'
              >
              
              BackEnd
            </Text>
          </div>


          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>



            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEUAHisA7WQA8GUAHSsAHCsAACcAGCoAGSoA7GQAGioAFioA82YAACgA6GMA8mYAtFMAECkALjAADSkAFCkA3V8AdkIAwFcA5GEAQzYA01wAp08Ak0oAKS0AYDsA92cABSgAaj4AODMAPjQAyFoAn00AmUwA110AhkUAUzkAgkYAJS0ASTcAq1AAzFoAOjMAkEoAZTwAUDkAe0IARTQAMjBMrlASAAAHq0lEQVR4nO2daXeqPBCAISyyyFJkUVxwQVt3rf7/3/YC6q21QFDb44R3nk/3nPuFpyGZzGSCHIcgCIIgCIIgCIIgCIIgCIIgCIIgCIIgjyHK4qsf4W9Re8ue+uqH+EvU3razrbWitgv0YKe9+jH+Dm08MXlzMq6totiLBzzPD+JeXVcbqWvwKUZXevWj/A123yWZIXH79qsf5i9QF+uTYKK47tVwKoqSr/MXjHDUePUD/TaNY2z8E+SJ0m3VLCqKnDcj/JXizONqtaAKWn9m8teYs74mvPqxfhH1YOn8d3TrUKP3VGhaBn+LYTXrM4iSR34IJnPRq0vgFyJPyTVUvKgeo9hYBnmCiWKwrEVUtPe+kivI84q/b7368Z5HG1tFgoli2JNf/YDPovbiYsFkD759YzxmCJpXMAkvU9FjPPCr/YlZIpjsbSZ9pgdRjOJywUQxjhjeoApRVrYoZzBlOCo6/U7ZJDxPxU7fefWDPop8pEzCy1Q8MhoyRC4sCRRXKCGjuWLkufR3NHtPXS969cM+gnbwK/ml+AcGK1PiIq42gtkoxgv23lNtP7nDcLJnbhDFXkgPhV8MQtYq/YI2DO4Q5PlgKLMV9+X2ukoo/EL322xlw9L8nnc0xZgzFTHUXsVQ+AVxjywlGVJ4Wx6lM2Ap7Mub+5aZ0yAGG2a2p0Jk3S+YzMR3m5XltPVx9yzMBtH9YKTyJqirajnFLcpKZWMQteX6kSFMj4aXTOzdxMXcfUgwmYlTJjbg8h1Z0w2mv2RhOY3m9+3XriDukIGSTaPtP2zIxu5U6z8Q7f8R9MGvNcKie/+G7WoQuwvoAUPt+Y+FihPEB9+bac9/ntjfgzGH3hDmTJ95SZPXdAp8NRWkxxfSE6YEeyJq+3tz+1sGsKtugvjUSpqid5uvtiij0aZtug2XshKRNej7Clqflje5Pm1broAO+tGUYkg6FtVwCrleI1EzQzekHZqSNeBmMPVtRnv8zjvtj0BmgBtQ7CHtFSRrqiHvDuFuaxzvVww9sNsaQY1pm1KynlObF4wYbEFKHZW0sJ0N/Q/qsaJijaBORPVIfXrij6nZFZmAPcHQPqhzjPhtuuH6A2rMb9EbhCoZdvpQa9/OO7VEY/oVClXBO9TF1NlS83sjXlLXW97YQjVs0k8NKxnqIdAESpBXv2S4Atq1IL5Z1ClmTBdTqqFpvcFMESsZdqMuGsI1VGtvWP8xrGIYbKUtfVvAsCFxd9KO2sbAtuFQGqIhXEPBDn/JMITaOtT8NUOg+9Iqhp2jdqQmkXAN6fkh6Yy0EdUQbn5of1KLiZUM3U+oBVN6FaOSIeAqhkxtaCOdjbahH1yA7YxSqTe5yNoWbdqfQVmBrZcKdtmd35OhRD+fMqZQw2F6fEg94K1kCPcAsbWjLKZkkhjSCuPuDupCk7aWUs4PlSSWNym3EskMcpMpbXwqGU4AnwFzTrf86asYKl2oO5oUbf8LhmDPZVIah/LX1Jg7nPNZuuCSCezL61L5uYvh2bQxNH3I0zDZuI1K+9pSQ9srHcPBCOqW7YQglSZQFQwD4L2JnBOXnc7QDfV3qJnThZZXNoh0QwN28yWX9XmXrDVBEgm0j5K/ge4Dbog6IXDbkrUm2DS4RtnlRHcOvlc/CYklrQjBODEcFxsSF3S4PyFwJW3CNEO9y4EfwtJqDZmVGwKu0FwjCnGhwaSdGhanWLEAOHH6ongQSScdw4NV9N+uBz0YnhC0op0nsQ6NZIyLDJXVkYkhLLnpTCxN4NRNgSEJ4DaW3iA0C26rEyvJGwSnaAytFgML6Qn5mP+hvcyQk/INicvSB7Gk/JlYasiz9NUITn3z88J+maHug+2bzcUZ5iUQJMvfpdxtncHCJecrRDXvI0pmVs2OpjnZxyBUGYkUFxr7nI8MmfN0nJyc6+zmeg//Evd3xF5OZ1CxIYufMRV7P0/1Cw1N5j71ldJa/qid6tnxtf15u86SyZKFnOIH0Y++En2cxnR5fGvYYSoUXiHdnmLo7cywfWOobGEXgYsR1ZvfC8g3NNOMg1G00XfFXEPTPTI5CU84O/d63dQPmeFB/ya4ZyPtzUdQv/00iZ5V7AXpypDMPHZypjxEbX71uwiDcTrhGldrKVHmGoOR8BpR3n4pKqegEA2+BLegb99XQt6ElzTjcktb+pd3GCE739krprW5pMP/DC8dNUq4YXgZ/aI1Ot/4ujXUw1EtBJOweP7i7o3hIKzPb5PJ3GqQGWY/EiBGmeFgxdVgDl5ocCFJrPStpnKqtk1eWsLHHLN7tTzkY5y1vHUXzqKb/iN4t5kqPNFpiF4nGTlj2p8ahCedmv3sWoq4GCbTjyhuugGwhpC78x5FlD7OZ1JkPXJqKMilGfEpLup1/R1Sznk/G4K9T/EszvxsOK+rodY+JRWDdm32Mjdoy7MhG58LfoD6G8rLUyu/C/ZOzLOIXLblJuv67WcuSFnIJ526hkOOa57HEOoFyudxsrNRE/pHWJ/AyX5Jz4zra2hn2zb4jc6P0xqmAXEwrEn9KYf/geFuliTBM8C3755F3cx0os82NavQXCH2upZldVnsSqiK6EiSVNMKBoIgCIIgCIIgCIIgCIIgCIIgCIIgCPL3/Ac9BpDDbPkHWAAAAABJRU5ErkJggg==" alt="" />
              <p className='skillsPara'>MongoDB</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jOW_7RbdVuI2DSx_hOKQ3YLRp5NAS_5eXc4o6x-ovjbJmbzDpb2CCoXbN9LXwicjsCY&usqp=CAU" alt="" />
              <p className='skillsPara'>Node.js</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,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" alt="" />
              <p className='skillsPara'>Express</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
              <p className='skillsPara'>CSS</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
              <p className='skillsPara'>Java Script</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
              <p className='skillsPara'> React</p>
            </div>

            <div className='centerLogo' >

              <div class="dot-spinner">
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
              </div>
            </div>

          </div>



        </div>

      </div>

    </div>



    <div style={{ margin: "auto" }} className='softSkillSection'>



      <div className='softSkillTitle' style={{ textAlign: "center"}}>
        <SoftSkill size={"lg"} />
      </div>

      <div className='softSkillsOthersParentDiv' style={{display: "flex", justifyContent: 'space-around' }}>

        <div className='skilsLogoDiv' style={{ padding: "15px" }}>
          <div>
            <Text className='heading' textAlign={"center"} color={"black"} fontSize={"28px"} fontFamily={"Poppins,sans-serif"} fontWeight={"600"}>
              Soft
            </Text>
          </div>


          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>



            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,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" alt="" />
              <p className='skillsPara'>Collaborative</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXPiRbBhgu1zK8O9J93iZ24drV-gm0qEVFg&usqp=CAU" alt="" />
              <p className='skillsPara'>Learning</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,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" alt="" />
              <p className='skillsPara'>Growth</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,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" alt="" />
              <p className='skillsPara'>Adaptability</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxCigWLLG8y6RwVj5eLN-pnuSQ9v9693-RQ&usqp=CAU" alt="" />
              <p className='skillsPara'>Time Management</p>
            </div>


            <div className='centerLogo' >

              <div class="dot-spinner">
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
              </div>
            </div>

          </div>

        </div>



        {/* **************OTHER***************** */}
        <div style={{ padding: "10px" }}>

          <div>
            <Text className='heading' textAlign={"center"} color={"black"} fontSize={"28px"} fontFamily={"Poppins,sans-serif"} fontWeight={"600"}>
              Others
            </Text>
          </div>


          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>



            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,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" alt="" />
              <p className='skillsPara'>MongoDB</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jOW_7RbdVuI2DSx_hOKQ3YLRp5NAS_5eXc4o6x-ovjbJmbzDpb2CCoXbN9LXwicjsCY&usqp=CAU" alt="" />
              <p className='skillsPara'>Node.js</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/png;base64,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" alt="" />
              <p className='skillsPara'>Express</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
              <p className='skillsPara'>CSS</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
              <p className='skillsPara'>Java Script</p>
            </div>

            <div className='skillsParentDiv'>
              <img className='skillsImages' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
              <p className='skillsPara'> React</p>
            </div>

            <div className='centerLogo' >

              <div class="dot-spinner">
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
              </div>
            </div>

          </div>



        </div>

      </div>

    </div>










  </DIV>

}

export default Skills;

const DIV = styled.div`

width: 80%;
margin:auto; 

color: ${props => (props.theme === "lightTheme" ? "#212121" : "#ffffff")};

 .heading{

  color: ${props => (props.theme === "lightTheme" ? "#212121" : "#ffffff")};

 }

 


/* *********** ************************************/

.skillsImages{
    width:40px;
    height: 40px;
    margin-right:5px;
    border-radius: 20px;

}

.skillsPara{
    color: ${props => (props.theme === "lightTheme" ? "#000000" : "#ffffff")};;
    font-size: 20px;
    font-weight: bold;
}

.skillsParentDiv{
     margin:0px 10px 20px 0px;
     display: flex;
     align-items: center;
     border: ${props => (props.theme === "lightTheme" ? "2px solid #000000" : "2px solid #ffffff")};
     padding:10px 10px;
     border-radius: 15px;
    
}




@media screen and (max-width: 588px) {
      /* Your styles for large devices go here */
    

   

     .skillsPara{
      font-size: 16px;
     }
      
    }

    @media screen and (max-width: 1000px) {
      /* Your styles for large devices go here */
      .softSkillsOthersParentDiv{
        flex-direction: column;
      }

  
      
    }

    
    @media screen and (min-width: 500px) {
      /* Your styles for large devices go here */
      .imageAndDetailParentDiv{
        width: 80%;
      }

   

      .techSkills{
        width: 80%;
      }

      .softSkillSection{
        width: 80%;
      }

  
      
    }


    @media screen and (max-width: 370px) {
      /* Your styles for large devices go here */

      
      
    }






//LOADER ANIMATION
.dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: .9s;
  --uib-color: ${props => (props.theme === "lightTheme" ? "#212121" : "#ffffff")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: '';
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}



`