import styled from "styled-components"
import css from "../../assets/logos/css.svg";
import git from "../../assets/logos/git.svg";
import html from "../../assets/logos/html.svg";
import java from "../../assets/logos/java.svg";
import js from "../../assets/logos/js.svg";
import mongo from "../../assets/logos/mongo.svg";
import postgre from "../../assets/logos/postgre.svg";
import react from "../../assets/logos/react.svg";
import spring from "../../assets/logos/spring.svg";
import trello from "../../assets/logos/trello.svg";
import webstorm from "../../assets/logos/webstorm.svg";
import ts from "../../assets/logos/ts.svg";
import mui from "../../assets/logos/mui.svg";
import {useState} from "react";
import './../../App.css';
import {useNav} from "../UseNav";
import TechnologyGroup from "../TechnologyGroup";

const Container = styled.section`
  width: 80%;
  display:flex;
  margin: 0 auto;
  @media (max-width: 768px){
    width: 100%;
    margin: 10% 0 30% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  width: 40%;
  @media(max-width: 768px){
    width: 100%;
  }
`;

const TechnologiesWrapper = styled.div`
  width:80%;
  background-color: red;
`;


const Title = styled.h1`
  @media(max-width: 768px){
    text-align: center;
  }
`;



const frontendSkills = [{
        img: html,
        title: "HTML5"
    },
    {
        img: css,
        title: "CSS3"
    },
    {
        img: js,
        title: "JavaScript"
    },
    {
        img: react,
        title: "React"
    },
    {
        img: ts,
        title: "TypeScript"
    },
    {
        img: mui,
        title: "Material UI"
    }
];

const backendSkills = [
    {
        img: java,
        title: "Java"
    },
    {
        img: spring,
        title: "Spring"
    },
    {
        img: mongo,
        title: "MongoDB"
    },
    {
        img: postgre,
        title: "PostgreSQL"
    },
];

const otherSkills = [
    {
        img: webstorm,
        title: "Webstorm"
    },
    {
        img: git,
        title: "Git"
    },
    {
        img: trello,
        title: "Trello"
    }
];

const Skills = () => {

    const [indexOfSkill, setIndexOfSkill] = useState(null)
    const skillsRef = useNav('Contact');

    return(
        <Container ref={skillsRef} id={'skillsContainer'}>
            <TextWrapper>
                <Title>Technologie</Title>
                <p>lorem ipsum dolor sit amet</p>
            </TextWrapper>
            <TechnologiesWrapper>
                <TechnologyGroup groupName={'Frontend'} technologies={frontendSkills}/>
                <TechnologyGroup groupName={'Backend'} technologies={backendSkills}/>
                <TechnologyGroup groupName={'Other'} technologies={otherSkills}/>

            </TechnologiesWrapper>
        </Container>
    )
}
export default Skills;