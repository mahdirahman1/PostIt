import React, { useState } from "react";
import styled from "styled-components";
import Progress from "./Progress";
import { useDispatch, useSelector } from "react-redux";

const StyledLabel = styled.label`
  background: black;
  color: white;
  padding: 0.8rem;
  padding-right: 1.2rem;
  border-radius: 1.5rem;
  cursor: pointer;
  margin-top: 1.4rem;

  &:hover {
    background-color: white;
    color: black;
    box-shadow:inset 0px 0px 0px 1px black;
`;

const UploadForm = () => {
  const [error, setError] = useState(null);
  const allowedTypes = ["image/png", "image/jpeg"];
  const file = useSelector((state) => state.fileReducer.file);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setError(null);
      dispatch({ type: "SET", payload: selectedFile });
    } else if (selectedFile) {
      setError("Please select a valid file type (jpeg or png)");
    } else {
      setError(null);
    }
    e.target.value = null;
  };

  return (
    <div>
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        onChange={onChangeHandler}
      />
      <StyledLabel htmlFor="file-input">
        <i class="fas fa-plus-circle" style={{ padding: "0 0.4rem" }}></i>
        Upload
      </StyledLabel>
      {file && <div>{file.name}</div>}
      {error && <div>{error}</div>}
      {file && <Progress />}
    </div>
  );
};

export default UploadForm;
