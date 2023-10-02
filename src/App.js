
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import styled from "styled-components"

import { Name } from './Components/Name';
import { useContext } from 'react';
import { AppContent } from './Context/ContextApi';
import { Footer } from './Comp/Footer';




function App() {

  const {theme} = useContext(AppContent)
  return (
    <DIV theme={theme}>

      <div className='navComp' >
       

       <Name />

        <div id="nav-menu" style={{ width: "65%" , paddingTop: "7px"}}>
          <Navbar  />
        </div>

      </div>
  
      
      <div style={{marginTop: "50px",  paddingTop: "40px"}}>
    
      <AllRoutes  />

      </div>

      <div>
        <Footer />
      </div>
    </DIV>
  );
}

export default App;

const DIV = styled.div`

background-color: ${props => (props.theme === "lightTheme" ? "#e8e8e8" : "#212121")};

.navComp{
background-color: ${props => (props.theme === "lightTheme" ? "#e8e8e8" : "#212121")};
display: flex;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 999;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}



`
