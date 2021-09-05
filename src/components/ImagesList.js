import React from "react";
import useDatabase from "../hooks/useDatabase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./Image";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

const ImagesList = (props) => {
  const images = useDatabase("images");
  const dispatch = useDispatch();

  const onClickHandler = (image) => {
    dispatch({ type: "SET_IMG", payload: image.url });
  };

  return (
    <Container>
      <Row>
        {images &&
          images.map((image) => (
            <Col xl={4} lg={6} md={6} key={image.id}>
              <motion.div onClick={() => onClickHandler(image)} layout>
                <Image url={image.url} />
              </motion.div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ImagesList;
