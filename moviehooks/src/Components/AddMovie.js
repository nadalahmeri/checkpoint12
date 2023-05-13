import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddMovie({ addMovie }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(0);
  const [frameUrl, setFrameUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("this is handeling the add movie");
    if (title && posterUrl) {
      addMovie({
        id: Math.random(),
        title: title,
        description: description,
        posterUrl: posterUrl,
        rate: rate,
        frameUrl: frameUrl,
      });
      setTitle("");
      setDescription("");
      setPosterUrl("");
      setRate("");
      setFrameUrl("");
      handleClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title>Editing Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="update movie title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="describing movie"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Image</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setPosterUrl(e.target.value)}
                rows={1}
                placeholder="movie image url"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Rate</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setRate(e.target.value)}
                rows={1}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>frameUrl</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setFrameUrl(e.target.value)}
                rows={1}
                placeholder="movie trailer link"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
