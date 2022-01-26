import styled from "styled-components";

const Navbar = ({swiper, setSwiper}) => {
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
                <h3>Dariusz Czajka</h3>
            <Content>
                <button onClick={() => {
                }}>O mnie</button>
                <p>Technologie</p>
                <p>Projekty</p>
                <p>Korepetycje</p>
                <p>Kontakt</p>
            </Content>
        </Wrapper>
    )
}
export default Navbar;