import styled from "styled-components";
import ListProject from "../ListProject";
import pizza from "../../resources/assets/pizza.png";
import portfolio from "../../resources/assets/portfolio.png";
import movies from "../../resources/assets/movies.jpeg";
import chatApp from "../../resources/assets/chat-app.png";
import {useNav} from "../UseNav";


const Container = styled.section`
  width: 80%;
  margin-left: 20%;
  padding-top: 10%;
  margin-bottom: 15%;
  @media (max-width: 768px){
    width: 95%;
    padding-top: 25%;
    margin: 0 0 35% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProjectWrapper = styled.div`
  width: 80%;
  display: flex;
  gap: 30px;  
  flex-direction: column;
  @media(max-width: 768px){
    width: 90%;
  }
`;


const Projects = () => {
    const projectsRef = useNav('Projects');

    return(
        <Container ref={projectsRef} id={'projectsContainer'}>
            <h1>Projekty</h1>
            <ProjectWrapper>
                <ListProject
                    title={"pizzaDEVourers"}
                    author={"Dariusz Czajka, Dominik Sęk"}
                    desc={"Aplikacja klient-serwer obsługująca restaurację."}
                    github={"https://github.com/dariuszczajka/pizzaDEVourers-server"}
                    img={pizza}
                />
                <ListProject
                    title={"Strona portfolio"}
                    author={"Dariusz Czajka"}
                    desc={"Strona którą aktualnie odwiedzasz - ciągle w rozbudowie."}
                    github={"https://github.com/dariuszczajka/portfolio-website"}
                    img={portfolio}
                />
                <ListProject
                    title={"Chat app"}
                    author={"Dariusz Czajka, Dominik Sęk, Wojeciech Sutkowski"}
                    desc={"Komunikator sieciowy na urządzenia mobilne, napisany w technologii React Native."}
                    github={"https://github.com/gothic459/chat-app"}
                    img={chatApp}
                />
                <ListProject
                    title={"Movie database"}
                    author={"Dariusz Czajka"}
                    desc={"Baza filmów posiadająca podstawowe funkcjonalności."}
                    github={"https://github.com/dariuszczajka/baza-filmow"}
                    img={movies}
                />
            </ProjectWrapper>
        </Container>
    )
}
export default Projects;