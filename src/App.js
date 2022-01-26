import Home from './components/layouts/Home.tsx';
import Navbar from './components/Navbar.tsx';
import styled from 'styled-components';
import './App.css';
import {useState} from "react";

const Root = styled.div`
    background-color: #13171C;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: aliceblue;
`;

function App() {
  const [swiper, setSwiper] = useState(0);
  return (
    <Root>
      <Navbar props={swiper}/>
        <p>{swiper}</p>
      <Home props={swiper}/>
    </Root>
  );
}

export default App;
