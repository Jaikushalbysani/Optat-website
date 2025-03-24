"use client"
import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import "./style.css"; // Ensure this file exists for styling

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 35px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  font-family:"Poppins";
  font-weight:300;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 13px;
  text-align: center;
  font-weight: 600;
  font-family:"Poppins";
  font-weight:300;
  color: #5B5B5B;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  padding: 32px;
  font-family:"Poppins";
  font-weight:300;
  border-radius: 50px;
  box-shadow: rgba(153, 22, 230, 0.3) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  position: relative;
  margin-bottom:50px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  font-family:"Poppins";
  font-weight:300;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  font-family:"Poppins";
  font-weight:300;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  font-family:"Poppins";
  font-weight:300;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactButton = styled.button`
  width: 100%;
  background: ${({ disabled }) =>
    disabled ? "#000" : "#fff"};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 30px;
  border: none;
  font-family:"Poppins";
  font-weight:300;
  color: black;
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s;
`;

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    setIsDisabled(true);

    emailjs
      .sendForm(
        "service_9uis7lp", // Your EmailJS service ID
        "template_r6ut2b7", // Your EmailJS template ID
        form.current,
        "G2g3U7x8bVLrhjcgZ" // Your public key
      )
      .then(
        () => {
          setButtonText("Message Sent ✅");

          setTimeout(() => {
            setButtonText("Send");
            setIsDisabled(false);
          }, 5000);

          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
          setButtonText("Send");
          setIsDisabled(false);
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>C O N T A C T</Title>
        <Desc>Feel free to reach out, for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <input type="hidden" name="to_name" value="Optat" />

          <ContactTitle>Get In Touch</ContactTitle>

          <ContactInput type="email" placeholder="Your Email" name="from_email" required />
          <ContactInput type="text" placeholder="Your Name" name="from_name" required />
          <ContactInputMessage placeholder="Message" name="message" rows={4} required />

          <ContactButton type="submit" disabled={isDisabled}>
            {buttonText}
          </ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;