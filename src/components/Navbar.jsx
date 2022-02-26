import styled from "styled-components";

const Navbar = (props) => {
    const Wrapper = styled.div`
      width: 100%;
      height: 7%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `;

    const Content = styled.div`
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `;

    return(
        <Wrapper>
                <h3 style={{cursor: "pointer"}} onClick={() => props.swipe(0)}>Dariusz Czajka</h3>
            <Content>
                <p style={{cursor: "pointer"}} onClick={() => props.swipe(0)}>O mnie</p>
                <p style={{cursor: "pointer"}} onClick={() => props.swipe(1)}>Technologie</p>
                <p style={{cursor: "pointer"}} onClick={() => props.swipe(2)}>Projekty</p>
                <p style={{cursor: "pointer"}} onClick={() => props.swipe(3)}>Kontakt</p>
            </Content>
        </Wrapper>
    )
}
export default Navbar;