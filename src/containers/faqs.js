import React, {useState} from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs";
import * as ROUTES from "../constants/routes"

export function FaqsContainer() {
  const [input, setInput] = useState("");
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button to={ROUTES.SIGN_UP + "?" + input} email={input}>
          Try it now
        </OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create an account.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
