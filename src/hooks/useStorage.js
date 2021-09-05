import { useState, useEffect } from "react";
import { firebaseStorage } from "../firebase/config";
import { firestore } from "../firebase/config";
import firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import { useAlert } from "react-alert";

const moderatePhoto = async (url) => {
  const API_KEY = process.env.REACT_APP_MODERATION_API;
  const modURL = `https://api.moderatecontent.com/moderate/?face=true&key=${API_KEY}&url=${url}`;
  console.log(API_KEY);
  let mod_response = await fetch(modURL);
  const data = await mod_response.json();
  if (data["rating_label"] === "adult") {
    return {
      reject: "Rejected. Adult content detected",
    };
  }
  if (data.faces && data.faces.length > 0) {
    return {
      reject:
        "Rejected. Face detected, please do not upload pictures of people",
    };
  }
  if (data["rating_label"] === "teen" && data.predictions.everyone < 50) {
    return {
      reject: "Rejected. Picture not appropriate",
    };
  }

  return { reject: null };
};

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const alert = useAlert();

  useEffect(() => {
    const fileRef = firebaseStorage.ref(`${uuidv4()}`);
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
        const modAlert = alert.info("Moderating your photo ...", {
          transition: "fade",
          position: "bottom right",
        });
        const { reject } = await moderatePhoto(url);
        alert.remove(modAlert);
        if (reject) {
          setError(reject);
        } else {
          setUrl(url);
          const createdAt = firebase.firestore.FieldValue.serverTimestamp();
          collectionRef.add({ createdAt, url });
        }
      }
    );
  }, [file, alert]);

  return { progress, url, error };
};

export default useStorage;
