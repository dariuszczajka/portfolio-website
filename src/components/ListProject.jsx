import styled from "styled-components";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Root = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display:flex;
  flex-direction: column;
`;

const Desc = styled.p`
  color: #919191;
  margin: 0 0 5px 5px;
`;

const GithubBtn = styled.a`
  border: 1px solid #F87060;
  width: 70px;
  height: 25px;
  margin: 0 0 5px 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: beige;
  text-decoration: none;
`;

const Title= styled.h3`
  margin: 5px 0 5px 5px;
`;

const Author = styled.div`
  margin: 0 0 5px 5px;
`;
const ListProject = (props) => {
    return(
        <Root>
            <Title>{props.title}</Title>
            <Author>{props.author}</Author>
            <Desc>{props.desc}</Desc>
            <GithubBtn href={props.github}>
                <FontAwesomeIcon icon={faGithub} style={{"color": "white"}}/><p>Code</p>
            </GithubBtn>
        </Root>
    )
}
export default ListProject;