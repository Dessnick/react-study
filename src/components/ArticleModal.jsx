import React from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { StateContext } from "../App";

function ArticleModal({ openModal }) {
  const [state, dispatch] = React.useContext(StateContext);
  const [data, setData] = React.useState(state.currentPost);
  const [postUploading, setPostUploading] = React.useState(false);

  React.useEffect(() => {
    setData(state.currentPost);
  }, [state.currentPost]);

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL"
    });
  };

  const onAddArticle = (data) => {
    if (data) {
      axios
        .post(`https://5c3755177820ff0014d92711.mockapi.io/articles`, data)
        .then(({ data }) => {
          dispatch({
            type: "ADD_ARTICLE",
            payload: data
          });
        });
    }
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const onClickAdd = () => {
    if (onAddArticle) {
      setPostUploading(true);
      onAddArticle(data);
    }
    setData({
      title: "",
      image: "",
      text: ""
    });
  };

  return (
    <Modal
      show={openModal}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Adding article</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!postUploading ? (
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeInput}
                name="title"
                value={data.title}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeInput}
                name="image"
                value={data.image}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleChangeInput}
                name="text"
                value={data.text}
              />
            </Form.Group>
          </Form>
        ) : (
          "Uploading..."
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="success" onClick={onClickAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ArticleModal;
