import React from "react";
import styled from "styled-components";
import UploadForm from "./UploadForm";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  margin: 5rem 5%;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.01rem;
  @media (max-width: 400px) {
    font-size: 0.85rem;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ x: "-200vw", opacity: 0 }}
        animate={{ x: 10, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <p>A Photography sharing platform for all</p>
        <Typewriter
          options={{
            strings: [
              "Anonymously post your shots",
              "You don't need to be a pro!",
              "Just Post It!",
              "Show off your photograhy skills!",
              "No sign-up required",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <UploadForm />
      </motion.div>
    </Wrapper>
  );
};

export default Header;
