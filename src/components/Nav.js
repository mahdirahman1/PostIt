import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const NavWrapper = styled.div`
  margin: 0 auto;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  letter-spacing: 0.5rem;
`;
const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <NavWrapper>
          <Navbar.Brand style={{ margin: "0" }}>Post It</Navbar.Brand>
        </NavWrapper>
      </Navbar>
    </div>
  );
};

export default Nav;
