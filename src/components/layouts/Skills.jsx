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
import {useState} from "react";
import _ from 'lodash'
import './../../App.css';
import {useNav} from "../UseNav";

const Container = styled.section`
  width: 80%;
  display:flex;
  margin-left: 20%;
  padding-top: 5%;
  margin-bottom: 15%;
  @media (max-width: 768px){
    width: 100%;
    margin: 10% 0 30% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  margin-top: 5%;
  width: 40%;
  @media(max-width: 768px){
    width: 100%;
  }
`;

const CircleWrapper = styled.div`
  width:80%;
  @media(max-width: 768px){
    display: none;
    width: 0;
  }
`;

const SkillName = styled.p`
  text-indent: 1.5em;
  color: #919191;
  cursor: pointer;
`;

const Title = styled.h1`
  @media(max-width: 768px){
    text-align: center;
  }
`;

const SkillGroupName = styled.h3`
  color: #919191;
  @media(max-width: 768px){
    padding-top: 3%;
    text-align: center;
  }
`;

const SkillsWrapper = styled.div`
  @media(max-width: 768px){
    margin-left: -2em;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

const arrayOfSkills = [html, css, js, react, java, spring, mongo, postgre, git, trello]
const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js"]
const backendSkills = ["Java", "Spring", "Mongo", "PostgreSQL"]
const otherSkills = ["Git", "Trello"]
const arrayOfSkillsString = frontendSkills.concat(backendSkills).concat(otherSkills)

const Skills = () => {

    const [indexOfSkill, setIndexOfSkill] = useState(null)
    const skillsRef = useNav('Contact');

    return(
        <Container ref={skillsRef} id={'skillsContainer'}>
            <TextWrapper>
                <Title>Technologie</Title>
                <SkillGroupName>Frontend</SkillGroupName>
                <SkillsWrapper>
                    {frontendSkills.map((skill) => {
                        return(
                            <SkillName
                                onMouseEnter={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}
                                onMouseLeave={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}>
                                {skill}
                            </SkillName>
                        )
                    })}
                </SkillsWrapper>
                <SkillGroupName>Backend</SkillGroupName>
                <SkillsWrapper>
                    {backendSkills.map((skill) => {
                        return(
                            <SkillName
                                onMouseEnter={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}
                                onMouseLeave={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}>
                                {skill}
                            </SkillName>
                        )
                    })}
                </SkillsWrapper>
                <SkillGroupName>Narzędzia</SkillGroupName>
                <SkillsWrapper>
                    {otherSkills.map((skill) => {
                        return(
                            <SkillName
                                onMouseEnter={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}
                                onMouseLeave={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}>
                                {skill}
                            </SkillName>
                        )
                    })}
                </SkillsWrapper>
            </TextWrapper>
            <CircleWrapper>
                {arrayOfSkills.map((skill) => {
                    let circleStyle = {
                        transform: 'rotate(-' + (arrayOfSkills.indexOf(skill) * (360 / arrayOfSkills.length)) + 'deg) translate(230px)',
                        width: '10%',
                        height: '10%',
                        position: 'absolute',
                        top: '33%',
                        left: '65%',
                        margin: '-15px'
                    }

                    let imageStyle = {
                        transform: 'rotate(' + (arrayOfSkills.indexOf(skill) * (360 / arrayOfSkills.length)) + 'deg)'
                    }

                    let grey = {
                        filter: 'grayscale(100%)',
                        width: '4rem',
                    }

                    let color = {
                        filter: 'none',
                        width: '4.5rem',
                    }

                    return(
                        <div style={circleStyle}>
                            <img className={'skills'} alt={'skill'} src={skill} style={_.merge(imageStyle, arrayOfSkills.indexOf(skill) === indexOfSkill ? color : grey)}
                                 onMouseEnter={() => setIndexOfSkill(arrayOfSkills.indexOf(skill))}
                                 onMouseLeave={() => setIndexOfSkill(arrayOfSkills.indexOf(skill))}/>
                        </div>
                    )
                })}
            </CircleWrapper>
        </Container>
    )
}
export default Skills;