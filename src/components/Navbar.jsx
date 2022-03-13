import styled from "styled-components";
import {useState} from "react";

const navLinks = [
    {navLinkId: 'O mnie', scrollToId: 'homeContainer'},
    {navLinkId: 'Technologie', scrollToId: 'skillsContainer'},
    {navLinkId: 'Projekty', scrollToId: 'projectsContainer'},
    {navLinkId: 'Kontakt', scrollToId: 'contactContainer'}
]

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  background-color: #13171C;
  height: 5%;
  display: flex; 
  justify-content: space-evenly;
`;

const NavSpan = styled.span`
  padding: 1em;
  cursor: pointer;
  transition: border-bottom 0.2s ease;
  transition-delay: 0.25s;
`;

const Logo = styled.div`
  display: flex;
  font-weight: bold;
  width: 25%;
`;

const Links = styled.div`
  display: flex;
`;

const NavLink = ({ navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }) => {
    const handleClick = () => {
        setActiveNavLinkId(navLinkId);
        document.getElementById(scrollToId).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <NavSpan
            id={navLinkId}
            onClick={handleClick}
            className={'navbar-animation'}
        >
			{navLinkId}
		</NavSpan>
    );
};



const Navbar = () => {
    const [activeNavLinkId, setActiveNavLinkId] = useState('');

    return (
        <Nav>
            <Logo>
                <NavLink
                    navLinkId={'Dariusz Czajka'}
                    scrollToId={'homeContainer'}
                    activeNavLinkId={activeNavLinkId}
                    setActiveNavLinkId={setActiveNavLinkId}
                />
            </Logo>
            <Links>
                {navLinks.map(
                    ({navLinkId, scrollToId}) =>
                        <NavLink
                            navLinkId={navLinkId}
                            scrollToId={scrollToId}
                            activeNavLinkId={activeNavLinkId}
                            setActiveNavLinkId={setActiveNavLinkId}
                        />
                )}
            </Links>
        </Nav>
    )
};

export default Navbar;
