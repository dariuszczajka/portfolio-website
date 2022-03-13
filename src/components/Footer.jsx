import styled from "styled-components";

const Footer = () => {
    const Wrapper = styled.footer`
      width: 100%;
      height: 1%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      position: absolute;
      bottom: 10px;
    `;

    const P = styled.p`
      margin: 0;
    `;
    return(
        <Wrapper>
            <P>Dariusz Czajka © 2022</P>
        </Wrapper>
    )
}
export default Footer;