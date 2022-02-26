import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/fontawesome-free-solid'

import {useState} from "react";
import Footer from "../Footer";

const Container = styled.div`
  width: 80%;
  margin-left: 20%;
  margin-top: 4%;
  margin-bottom: 5%;
`;

const ContactWrapper = styled.div`
  margin-top: 12%;
  width: 80%;
  display: flex;
  gap: 30px;  
  flex-direction: row;
  justify-content: center;
`;

const SocialMediaWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 15px 0 0 30px;
`;

const ContactFormWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const SocialMediaRow = styled.div`
  display: flex;
  flex-direction: row;
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
const Contact = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)

    const handleSubmit = () => {
        console.log("submit!")
    }

    return(
        <>
            <Container>
                <h1>Contact Me!</h1>
                <ContactWrapper>
                    <SocialMediaWrapper>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon="envelope" size="2x" style={{"color": "white"}} /><SocialMediaText>dczajka@tuta.io</SocialMediaText>
                        </SocialMediaRow>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon={faPhone} size="2x" style={{"color": "white"}} /><SocialMediaText>+48 517 974 650</SocialMediaText>
                        </SocialMediaRow>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{"color": "white"}} /><SocialMediaText>dariuszczajka</SocialMediaText>
                        </SocialMediaRow>
                        <SocialMediaRow>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{"color": "white"}} /><SocialMediaText>Dariusz Czajka</SocialMediaText>
                        </SocialMediaRow>
                    </SocialMediaWrapper>
                    <ContactFormWrapper>
                        <Form onSubmit={() => handleSubmit}>
                            <FormUserWrapper>
                                <FormUserInfo>
                                    <FormInput type="text" placeholder={"Name"} value={name} onChange={setName} />
                                </FormUserInfo>
                                <FormUserInfo>
                                    <FormInput type="text" placeholder={"Email"} value={email} onChange={setEmail} />
                                </FormUserInfo>
                            </FormUserWrapper>
                            <label>
                                <FormMessageInput type="textarea" placeholder={"Message"} value={message} onChange={setMessage} />
                            </label>
                            <SubmitBtn type="submit" value="Wyślij" />
                        </Form>
                    </ContactFormWrapper>
                </ContactWrapper>
            </Container>
            <Footer/>
        </>

    )
}
export default Contact;