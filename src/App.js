import "./App.css";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  console.log(selectedImg);
  return (
    <div className="App">
      <Nav />
      <Layout setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal url={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
