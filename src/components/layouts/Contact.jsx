import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/fontawesome-free-solid'

import {useState} from "react";
import Footer from "../Footer";
import {useNav} from "../UseNav";

const Container = styled.section`
  width: 80%;
  margin-top: 4%;
  margin-bottom: 20%;
  margin-left: 20%;
  @media(max-width: 768px){
    width: 95%;
    margin: 10% 0 20% 5%;
  }
`;

const ContactWrapper = styled.div`
  margin-top: 12%;
  width: 80%;
  display: flex;
  gap: 30px;  
  flex-direction: row;
  justify-content: center;
  @media(max-width: 768px){
    width: 95%;
  }

`;

const SocialMediaWrapper = styled.div`
  min-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 15px 0 0 30px;
  @media(max-width: 768px){
    padding: 0;
  }
`;

const ContactFormWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  
  @media(max-width: 768px)
  {
    display: none;
  }
`;

const SocialMediaRow = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 768px)
  {
  }
`;

const SocialMediaText = styled.h4`
  margin: 5px 0 0 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 0.5rem 0.5rem;
  background-color: #353B45;
  border: 0;
`;

const FormMessageInput = styled.textarea`
  width: 100%;
  margin-bottom: 15px;
  padding: 0.5rem 0.5rem;
  height: 165px;
  background-color: #353B45;
  border: 0;
`;

const FormUserInfo = styled.div`
    width: 48%;
`;

const FormUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;



const SubmitBtn = styled.input`
  display: flex;
  width: 20rem;
  height: 35px;
  justify-content: center;
  align-self: center;
  background-color: #353B45;
  color: white;
  border: 1px solid #F87060;
`;

const Title = styled.h1`
  display: flex;
  height: auto;
`;



const Contact = () => {

    const contactRef = useNav('Contact');

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)

    const handleSubmit = () => {
        console.log("submit!")
    }

    return(
        <>
            <Container ref={contactRef} id={'contactContainer'}>
                <Title>Kontakt</Title>
                <ContactWrapper>
                    <SocialMediaWrapper>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon="envelope" size="2x" style={{"color": "white"}} /><SocialMediaText>
                            <a rel={'noreferrer'} className={'hover-underline-animation'} href={"mailto:dczajka@tuta.io"} target={"_blank"}>dczajka@tuta.io</a></SocialMediaText>
                        </SocialMediaRow>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon={faPhone} size="2x" style={{"color": "white"}} /><SocialMediaText>
                            <a rel={'noreferrer'} className={'hover-underline-animation'} href={"tel:+48517974650"} target={"_blank"}>+48 517 974 650</a></SocialMediaText>
                        </SocialMediaRow>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{"color": "white"}} /><SocialMediaText>
                            <a rel={'noreferrer'} className={'hover-underline-animation'} href={"https://github.com/dariuszczajka"} target={"_blank"}>dariuszczajka</a></SocialMediaText>
                        </SocialMediaRow>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{"color": "white"}} /><SocialMediaText>
                            <a rel={'noreferrer'} className={'hover-underline-animation'} href={"https://www.linkedin.com/in/dariuszczajka/"} target={"_blank"}>Dariusz Czajka</a></SocialMediaText>
                        </SocialMediaRow>
                    </SocialMediaWrapper>
                    <ContactFormWrapper>
                        <Form onSubmit={() => handleSubmit}>
                            <FormUserWrapper>
                                <FormUserInfo>
                                    <FormInput type="text" disabled placeholder={"Name"} value={name} onChange={setName} />
                                </FormUserInfo>
                                <FormUserInfo>
                                    <FormInput type="text" disabled placeholder={"Email"} value={email} onChange={setEmail} />
                                </FormUserInfo>
                            </FormUserWrapper>
                            <label>
                                <FormMessageInput type="textarea" disabled placeholder={"currently disabled"} value={message} onChange={setMessage} />
                            </label>
                            <SubmitBtn disabled type="submit" value="Wyślij" />
                        </Form>
                    </ContactFormWrapper>
                </ContactWrapper>
            </Container>
            <Footer/>
        </>

    )
}
export default Contact;