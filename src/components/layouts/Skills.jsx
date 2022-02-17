import styled from "styled-components"
import css from "../../resources/logos/css.svg";
import git from "../../resources/logos/git.svg";
import html from "../../resources/logos/html.svg";
import java from "../../resources/logos/java.svg";
import js from "../../resources/logos/js.svg";
import mongo from "../../resources/logos/mongo.svg";
import postgre from "../../resources/logos/postgre.svg";
import react from "../../resources/logos/react.svg";
import spring from "../../resources/logos/spring.svg";
import trello from "../../resources/logos/trello.svg";

const Container = styled.div`
      width: 80%;
      display:flex;
      margin-left: 20%;
      margin-top: 2%;
      margin-bottom: 5%;
    `;

const TextWrapper = styled.div`
      margin-top: 5%;
      flex-direction: row;
      width: 25%;
    `;

const CircleWrapper = styled.div`
      margin-left: 5%;
      margin-right: 15%;
      width:80%;
    `;

const Circle = styled.img`
  border-radius: 50%;
  width: 5%;
  height: 5%;
  display: block;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  margin: -15px;
`;

const SkillName = styled.p`
      text-indent: 1.5em;
      color: #919191;
    `;

const Skills = () => {

    return(
        <Container>
            <TextWrapper>
                <h1>Skills</h1>
                <h3 style={{color: '#919191'}}>Frontend</h3>
                    <SkillName>HTML</SkillName>
                    <SkillName>CSS</SkillName>
                    <SkillName>JavaScript</SkillName>
                    <SkillName>React.js</SkillName>
                <h3 style={{color: '#919191'}}>Backend</h3>
                    <SkillName>Java</SkillName>
                    <SkillName>Spring</SkillName>
                    <SkillName>MongoDB</SkillName>
                    <SkillName>SQL</SkillName>
                <h3 style={{color: '#919191'}}>Tools</h3>
                    <SkillName>Git</SkillName>
                    <SkillName>Trello</SkillName>
            </TextWrapper>
            <CircleWrapper>
                    <Circle src={css} style={{transform: 'rotate(0deg) translate(130px)'}}/>
                    <Circle src={git} style={{transform: 'rotate(-36deg) translate(130px)'}}/>
                    <Circle src={html} style={{transform: 'rotate(-72deg) translate(130px)'}}/>
                    <Circle src={java} style={{transform: 'rotate(-108deg) translate(130px)'}}/>
                    <Circle src={js} style={{transform: 'rotate(-144deg) translate(130px)'}}/>
                    <Circle src={mongo} style={{transform: 'rotate(-180deg) translate(130px)'}}/>
                    <Circle src={postgre} style={{transform: 'rotate(-216deg) translate(130px)'}}/>
                    <Circle src={react} style={{transform: 'rotate(-252deg) translate(130px)'}}/>
                    <Circle src={spring} style={{transform: 'rotate(-288deg) translate(130px)'}}/>
                    <Circle src={trello} style={{transform: 'rotate(-324deg) translate(130px)'}}/>
            </CircleWrapper>
        </Container>
    )
}
export default Skills;