import styled from "styled-components";
import {useState} from "react";
import { ReactComponent as CloseMenu } from "../resources/assets/cross.svg";
import { ReactComponent as MenuIcon } from "../resources/assets/menu.svg";

const Navbar = (props) => {
    const Wrapper = styled.nav`
      width: 100%;
      height: 6%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      position: fixed;
      background-color: #13171C;
    `;

    const Content = styled.ul`
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

    `;


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
        <Wrapper>
                <h3 style={{cursor: "pointer"}} onClick={() => props.swipe(0)}>Dariusz Czajka</h3>
            <Content classname={click ? "nav-options active" : "nav-options"}>
                <li className={'navbar-animation option'} style={{cursor: "pointer"}} onClick={() => {
                    closeMobileMenu()
                    props.swipe(0)
                }}>O mnie</li>
                <li className={'navbar-animation option'} style={{cursor: "pointer"}} onClick={() => {
                    closeMobileMenu()
                    props.swipe(1)
                }}>Technologie</li>
                <li className={'navbar-animation option'} style={{cursor: "pointer"}} onClick={() => {
                    closeMobileMenu()
                    props.swipe(2)
                }}>Projekty</li>
                <li className={'navbar-animation option'} style={{cursor: "pointer"}} onClick={() => {
                    closeMobileMenu()
                    props.swipe(3)
                }}>Kontakt</li>
            </Content>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </Wrapper>
    )
}
export default Navbar;