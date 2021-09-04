import React, { useState } from "react";
import styled from "styled-components";
import Progress from "./Progress";

const StyledLabel = styled.label`
  background: black;
  color: white;
  padding: 0.8rem;
  padding-right: 1.2rem;
  border-radius: 1.5rem;
  cursor: pointer;
  margin-top: 1.4rem;
`;

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedTypes = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    const selectedFile = e.target.files[0];
    console.log(allowedTypes.includes(selectedFile));
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
  };

  return (
    <div>
      <input
        type="file"
        onChange={onChangeHandler}
        id="file-input"
        style={{ display: "none" }}
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
