import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";

const useDatabase = (collection) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let images = [];
        snap.forEach((image) => {
          images.push({ id: image.id, ...image.data() });
        });
        setData(images);
      });
    return () => {
      unsub();
    };
  }, [collection]);

  return data;
};

export default useDatabase;
