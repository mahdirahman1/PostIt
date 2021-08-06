import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutWrapper = styled.div`
  margin: 0 5rem;
  border: 1px solid black;
`;

const Layout = (props) => {
  return (
    <LayoutWrapper>
      <Header />
    </LayoutWrapper>
  );
};

export default Layout;
