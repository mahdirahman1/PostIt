import { useState, useEffect } from "react";
import { firebaseStorage } from "../firebase/config";
import { firestore } from "../firebase/config";
import firebase from "firebase/app";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fileRef = firebaseStorage.ref(file.name);
    const collectionRef = firestore.collection("images");

    fileRef.put(file).on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await fileRef.getDownloadURL();
        setUrl(url);
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        collectionRef.add({ createdAt, url });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
