import React, { useEffect } from "react";
import styled from "styled-components";
import useStorage from "../hooks/useStorage";

const StyledProgressBar = styled.div`
  height: 0.5rem;
  background: red;
  border-radius: 5rem;
  width: ${(props) => props.progress + "%"};
`;

const Progress = (props) => {
  const { file, setFile } = props;
  const { url, progress, error } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return <StyledProgressBar progress={progress} />;
};

export default Progress;
