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

const Container = styled.div`
  width: 80%;
  display:flex;
  margin-left: 20%;
  margin-top: 2%;
  margin-bottom: 15%;
`;

const TextWrapper = styled.div`
  margin-top: 5%;
  flex-direction: row;
  width: 40%;
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


const arrayOfSkills = [html, css, js, react, java, spring, mongo, postgre, git, trello]
const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js"]
const backendSkills = ["Java", "Spring", "Mongo", "PostgreSQL"]
const otherSkills = ["Git", "Trello"]
const arrayOfSkillsString = frontendSkills.concat(backendSkills).concat(otherSkills)

const Skills = () => {

    const [indexOfSkill, setIndexOfSkill] = useState(null)

    return(
        <Container>
            <TextWrapper>
                <h1>Technologie</h1>
                <h3 style={{color: '#919191'}}>Frontend</h3>
                {frontendSkills.map((skill) => {
                    return(
                        <SkillName
                            onMouseEnter={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}
                            onMouseLeave={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}>
                            {skill}
                        </SkillName>
                    )
                })}
                <h3 style={{color: '#919191'}}>Backend</h3>
                {backendSkills.map((skill) => {
                    return(
                        <SkillName
                            onMouseEnter={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}
                            onMouseLeave={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}>
                            {skill}
                        </SkillName>
                    )
                })}
                <h3 style={{color: '#919191'}}>Tools</h3>
                {otherSkills.map((skill) => {
                    return(
                        <SkillName
                            onMouseEnter={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}
                            onMouseLeave={() => setIndexOfSkill(arrayOfSkillsString.indexOf(skill))}>
                            {skill}
                        </SkillName>
                    )
                })}
            </TextWrapper>
            <CircleWrapper>
                {arrayOfSkills.map((skill) => {
                    let circleStyle = {
                        transform: 'rotate(-' + (arrayOfSkills.indexOf(skill) * (360 / arrayOfSkills.length)) + 'deg) translate(230px)',
                        width: '10%',
                        height: '10%',
                        position: 'absolute',
                        top: '32%',
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