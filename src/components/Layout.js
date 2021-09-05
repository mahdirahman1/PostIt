import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ImagesList from "./ImagesList";

const LayoutWrapper = styled.div`
  margin: 0 5%;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <ImagesList />
    </LayoutWrapper>
  );
};

export default Layout;
