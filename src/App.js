import * as React from "react";
import "swiper/css";
import "swiper/css/pagination"
import Navbar from './components/Navbar.jsx';
import styled from 'styled-components';
import './App.css';
import Hello from "./components/layouts/Hello.jsx";
import Skills from "./components/layouts/Skills";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";

const Root = styled.div`
    background-color: #13171C;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: aliceblue;
`;

function App() {

  return (
      <Root>
          <Navbar/>
          <Hello/>
          <Skills/>
          <Projects/>
          <Contact/>
      </Root>
  );
}

export default App;
