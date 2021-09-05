import React, { useEffect } from "react";
import styled from "styled-components";
import useStorage from "../hooks/useStorage";
import { useAlert } from "react-alert";

const StyledProgressBar = styled.div`
  height: 0.5rem;
  background: red;
  border-radius: 5rem;
  width: ${(props) => props.progress + "%"};
`;

const Progress = (props) => {
  const { file, setFile } = props;
  const alert = useAlert();
  const { url, progress, error } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
      alert.show("Photo Uploaded", {
        timeout: 3000,
        type: "success",
        transition: "fade",
        position: "bottom right",
      });
    }
    if (error) {
      alert.show("Something went wrong", {
        timeout: 3000,
        type: "error",
        transition: "fade",
        position: "bottom right",
      });
      console.log(error);
    }
  }, [url, setFile, alert]);
  return <StyledProgressBar progress={progress} />;
};

export default Progress;
