import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const NavWrapper = styled.div`
  margin: 0 auto;
`;
const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <NavWrapper>
          <Navbar.Brand href="#home">
            <img
              alt="" 
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            PostIt
          </Navbar.Brand>
        </NavWrapper>
      </Navbar>
    </div>
  );
};

export default Nav;
