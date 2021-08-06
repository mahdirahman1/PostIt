import React from "react";
import styled from "styled-components";
import UploadForm from "./UploadForm";

const Wrapper = styled.div`
  margin: 5rem 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Show off your photography</h1>
      <p>Anonymously post your shots, you don't have to be a professional!</p>
      <UploadForm />
    </Wrapper>
  );
};

export default Header;
