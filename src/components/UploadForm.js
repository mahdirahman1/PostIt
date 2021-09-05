import React, { useState } from "react";
import styled from "styled-components";
import Progress from "./Progress";
import { useAlert } from "react-alert";

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
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedTypes = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    console.log("here");
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setError(null);
      setFile(selectedFile);
    } else if (selectedFile) {
      setError("Please select a valid file type (jpeg or png)");
      setFile(null);
    } else {
      setError(null);
      setFile(null);
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
      {file && <Progress file={file} setFile={setFile} />}
    </div>
  );
};

export default UploadForm;
