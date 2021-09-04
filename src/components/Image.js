import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  overflow: hidden;
  min-width: 100%;
  max-width: 100%;
  object-fit: cover;
  height: 350px;
  width: 100%;
  border-radius: 0.8rem;
  margin: 1rem 0;
  opacity: 0.85;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    transform: scale(1.07);
    opacity: 1;
  }
`;

const Image = ({ url }) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 10, opacity: 1 }}
      transition={{ delay: 0.6, type: "tween" }}
    >
      <StyledImage src={url} />
    </motion.div>
  );
};

export default Image;
