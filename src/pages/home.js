import React, {useState} from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from "../constants/routes"

export default function Home() {
  const [input, setInput] = useState(""); 
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Entertainment with videos by Lucas Goldner.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Whenever you want.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" value={input} onInput={e => setInput(e.target.value)}/>
            <OptForm.Button to={ROUTES.SIGN_UP+"?"+input} email={input}>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create an account to watch.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
