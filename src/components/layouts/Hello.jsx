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
      min-height: 100%;
      display:flex;
      margin: 5% 0 20% 10%;
      @media (max-width: 768px){
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `;

    const AvatarWrapper = styled.div`
      margin-top: 5%;
      flex-direction: column;
      width: 25%;
      @media(max-width: 768px){
        width: 90%;
        margin: 10% 5% 0 5%;
        display: flex;
        justify-content: center;
      }
    `;

    const SocialMediaBox = styled.div`
      padding-top: 10%;
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      gap: 10%;
    `;

    const SocialMediaButton = styled.a`
      width: auto;
      height: auto;
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

    const Image = styled.img`
      border-radius: 50%;
      width: 100%;
      @media(max-width: 768px){
        width: 50%;
        
      }
    `;

    const Title = styled.h1`
      text-align: center;
    `;
    return(
        <Container>
            <AvatarWrapper>
                <Image src={"https://media-exp1.licdn.com/dms/image/C4E03AQEgp7xJlwWGJA/profile-displayphoto-shrink_800_800/0/1616599262595?e=1648684800&v=beta&t=tNoxSPfNpLwr1huoalMiDYwz-bhYdKEb3fSe6Pj027k"}/>
                <Title>Dariusz Czajka</Title>
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
                {/*
                <h1 >Cześć! <span className={'wave'}>👋</span></h1>
                <p>Nazywam się Darek i jestem studentem III roku informatyki na PWSZ w Tarnowie. Zawodowo jestem związany z firmą strefakursow.pl, gdzie pracuję na stanowisku doradcy jakości-moje zadanie polega głównie na kontroli przesyłanych kursów pod kątem merytorycznym i technicznym.</p>
                <p>Po godzinach udzielam się jako korepetytor z szeroko pojętego zakresu informatyki i programowania. </p>

                <p>Jestem osobą odpowiedzialną, zawziętą i upartą w dążeniu do celu; a nim jest rozpoczęcie kariery w sektorze IT.</p>

                <p>Dlaczego akurat ja? Pomimo braku komercyjnego doświadczenia, praca w sektorze e-learningowym sprawia, że ciągle wszechstronnie się rozwijam. W firmie poznałem wiele narzędzi, metodyki pracy programistów czy choćby zasad czystego kodu, co w połączeniu ze znajomością paradygmatów oraz języków programowania powinno stanowić solidną podstawę do dalszego rozwoju w sektorze IT.</p>

                <p>
                    Jestem otwarty na nowe możliwości - jeżeli Cię zainteresowałem, to skontaktuj się ze mną poprzez LinkedIn lub mailowo.
                </p>
*/}

                <h1 >Cześć! <span className={'wave'}>👋</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, est ut consectetur ultricies, libero mi volutpat sapien, ac tincidunt tellus enim luctus velit.</p>
                <p>Nullam convallis fermentum augue auctor faucibus. Maecenas hendrerit condimentum nibh at tempor. Morbi pretium, massa </p>

                <p>hasellus viverra mi orci, sed mollis velit tincidunt id. Etiam volutpat imperdiet nisi, eu maximus dolor ultrices sit amet.</p>

                <p>hasellus viverra mi orci, sed mollis velit tincidunt id. Etiam volutpat imperdiet nisi, eu maximus dolor ultrices sit amet.</p>

                <p>
                    hasellus viverra mi orci, sed mollis velit tincidunt id. Etiam volutpat imperdiet nisi, eu maximus dolor ultrices sit amet.
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