import styled from "styled-components";
import Typewriter from "typewriter-effect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Hello = () => {

    library.add(faEnvelope);

    const Container = styled.div`
      width: 80%;
      display:flex;
      margin-left: 20%;
      margin-right: 10%;
      margin-top: 5%;
      margin-bottom: 5%;
    `;

    const AvatarWrapper = styled.div`
      flex-direction: column;
      width: 20%;
    `;

    const SocialMediaBox = styled.div`
      padding-top: 10%;
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      justify-content: space-between;
    `;

    const SocialMediaButton = styled.a`
      width: 50px;
      height: 50px;
    `;

    return(
        <Container>
            <AvatarWrapper>
                <img src={"https://media-exp1.licdn.com/dms/image/C4E03AQEgp7xJlwWGJA/profile-displayphoto-shrink_800_800/0/1616599262595?e=1648684800&v=beta&t=tNoxSPfNpLwr1huoalMiDYwz-bhYdKEb3fSe6Pj027k"}
                     style={{"borderRadius": "50%", "width": "100%"}}/>
                <h1>Dariusz Czajka</h1>
                <Typewriter onInit={(typewriter) => {
                    typewriter
                        .changeDelay(50)
                        .typeString("Student 3 roku informatyki")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Quality advisor w strefakursow.pl")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Korepetytor")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<b>Przyszły fullstack developer.</b>")
                        .start();
                }
                }/>

                <SocialMediaBox>
                    <SocialMediaButton href={"mailto:dczajka@tuta.io"} target={"_blank"}>
                        <FontAwesomeIcon icon="envelope" size="2x" style={{"color": "white"}} />
                    </SocialMediaButton>
                    <SocialMediaButton href={"https://github.com/dariuszczajka"} target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub} size="2x" style={{"color": "white"}}/>
                    </SocialMediaButton>
                    <SocialMediaButton href={"https://www.linkedin.com/in/dariuszczajka/"} target={"_blank"}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{"color": "white"}} />
                    </SocialMediaButton>
                </SocialMediaBox>

            </AvatarWrapper>

        </Container>
    )
}
export default Hello;