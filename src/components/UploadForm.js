import React, { useState } from "react";

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
      <input type="file" onChange={onChangeHandler} />
      {file && <div>{file.name}</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default UploadForm;
