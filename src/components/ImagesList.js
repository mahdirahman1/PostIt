import React from "react";
import useDatabase from "../hooks/useDatabase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./Image";
import { motion } from "framer-motion";

const ImagesList = (props) => {
  const images = useDatabase("images");

  return (
    <Container>
      <Row>
        {images &&
          images.map((image) => (
            <Col xl={4} lg={6} md={6} key={image.id}>
              <motion.div onClick={() => props.setImage(image.url)} layout>
                <Image url={image.url} />
              </motion.div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ImagesList;
