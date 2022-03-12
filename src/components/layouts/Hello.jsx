import styled from "styled-components";
import Typewriter from "typewriter-effect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './../../App.css';

const Hello = () => {

    library.add(faEnvelope);

    const Container = styled.div`
      width: 80%;
      display:flex;
      margin-left: 20%;
      margin-top: 5%;
      margin-bottom: 5%;
      @media (max-width: 768px){
        display: flex;
        flex-direction: column;
      }
    `;

    const AvatarWrapper = styled.div`
      margin-top: 5%;
      flex-direction: column;
      width: 25%;
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

    const HomeTextWrapper = styled.div`
      margin-left: 5%;
      margin-right: 15%;
      width:80%;
    `;

    const ListWrapper = styled.div`
      width: 50%;
      display: inline-block;
      vertical-align: top;
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
                        .typeString("Quality advisor w <a style='color: #008efa' href='https://strefakursow.pl'>strefakursow.pl</a>")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Korepetytor")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<b>Web development enthusiast.</b>")
                        .pauseFor(5000)
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

            <HomeTextWrapper>
                <h1 >Cześć! <span className={'wave'}>👋</span></h1>
                <p>Nazywam się Darek i jestem studentem III roku informatyki na PWSZ w Tarnowie. Zawodowo jestem związany z firmą strefakursow.pl, gdzie pracuję na stanowisku doradcy jakości-moje zadanie polega głównie na kontroli przesyłanych kursów pod kątem merytorycznym i technicznym.</p>
                <p>Po godzinach udzielam się jako korepetytor z szeroko pojętego zakresu informatyki i programowania. </p>

                <p>Jestem osobą odpowiedzialną, zawziętą i upartą w dążeniu do celu; a nim jest rozpoczęcie kariery w sektorze IT.</p>

                <p>Dlaczego akurat ja? Pomimo braku komercyjnego doświadczenia, praca w sektorze e-learningowym sprawia, że ciągle wszechstronnie się rozwijam. W firmie poznałem wiele narzędzi, metodyki pracy programistów czy choćby zasad czystego kodu, co w połączeniu ze znajomością paradygmatów oraz języków programowania powinno stanowić solidną podstawę do dalszego rozwoju w sektorze IT.</p>

                <p>
                    Jestem otwarty na nowe możliwości - jeżeli Cię zainteresowałem, to skontaktuj się ze mną poprzez LinkedIn lub mailowo.
                </p>

                <ListWrapper>
                    <h2>Zainteresowania</h2>
                    <ul>
                        <li>Web development</li>
                        <li>Nowe technologie</li>
                        <li>Rozwój osobisty</li>
                    </ul>
                </ListWrapper>

                <ListWrapper>
                    <h2>Edukacja</h2>
                    <ul style={{'list-style-type': 'none', 'padding': 0, 'margin': 0}}>
                        <li><b>Informatyka Stosowana</b></li>
                        <li style={{color: '#919191'}}>ANS w Tarnowie</li>
                        <li style={{color: '#919191'}}>2019 - obecnie</li>
                    </ul>
                </ListWrapper>
            </HomeTextWrapper>
        </Container>
    )
}
export default Hello;