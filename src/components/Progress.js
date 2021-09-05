import React, { useEffect } from "react";
import styled from "styled-components";
import useStorage from "../hooks/useStorage";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

const StyledProgressBar = styled.div`
  height: 0.5rem;
  background: red;
  border-radius: 5rem;
  width: ${(props) => props.progress + "%"};
`;

const Progress = (props) => {
  const file = useSelector((state) => state.fileReducer.file);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { url, progress, error } = useStorage(file);
  useEffect(() => {
    if (url) {
      dispatch({ type: "SET", payload: null });
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
  }, [url, dispatch, error, alert]);
  return <StyledProgressBar progress={progress} />;
};

export default Progress;
