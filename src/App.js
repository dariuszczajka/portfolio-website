import Home from './components/layouts/Home.tsx';
import Navbar from './components/Navbar.tsx';
import styled from 'styled-components';
import './App.css';

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
  return (
    <Root>
      <Navbar/>
      <Home/>
    </Root>
  );
}

export default App;
