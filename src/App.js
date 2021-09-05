import "./App.css";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const selectedImg = useSelector((state) => state.modalReducer.selectedImg);
  console.log(selectedImg);
  return (
    <div className="App">
      <Nav />
      <Layout />
      {selectedImg && <Modal />}
    </div>
  );
}

export default App;
