import styled from "styled-components";

const Navbar = () => {
    const Wrapper = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `;

    return(
        <Wrapper>
            <p>navbar</p>
            <p>test</p>
        </Wrapper>
    )
}
export default Navbar;