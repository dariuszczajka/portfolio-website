import styled from "styled-components";
import ListProject from "../ListProject";


const Container = styled.div`
  width: 80%;
  margin-left: 20%;
  margin-top: 4%;
  margin-bottom: 5%;
`;

const ProjectWrapper = styled.div`
  width: 80%;
  display: flex;
  gap: 30px;  
  flex-direction: column;
`;


const Projects = () => {

    return(
        <Container>
            <h1>Projects</h1>
            <ProjectWrapper>
                <ListProject
                    title={"pizzaDEVourers"}
                    author={"Dariusz Czajka, Dominik Sęk"}
                    desc={"Lorem ipsum dolor sit amet."}
                    github={"https://github.com/dariuszczajka/pizzaDEVourers-server"}
                />
                <ListProject
                    title={"Movie database"}
                    author={"Dariusz Czajka"}
                    desc={"Lorem ipsum dolor sit amet."}
                    github={"https://github.com/dariuszczajka/baza-filmow"}
                />
                <ListProject
                    title={"pizzaDEVourers"}
                    author={"Dariusz Czajka, Dominik Sęk"}
                    desc={"Lorem ipsum dolor sit amet."}
                    github={"https://github.com/dariuszczajka/pizzaDEVourers-server"}
                />
                <ListProject
                    title={"pizzaDEVourers"}
                    author={"Dariusz Czajka, Dominik Sęk"}
                    desc={"Lorem ipsum dolor sit amet."}
                    github={"https://github.com/dariuszczajka/pizzaDEVourers-server"}
                />
            </ProjectWrapper>
        </Container>
    )
}
export default Projects;