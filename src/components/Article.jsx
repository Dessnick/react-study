import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Article({ id, title, image, text, createdAt, onEdit, onRemove }) {
  return (
    <Card key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <Link to={`articles/${id}`}>{title}</Link>
        </Card.Title>
        <Card.Text>{text.substr(0, 100)}</Card.Text>
        <Button variant="warning" className="mr-2" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onRemove(id)}>
          Delete
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Created at: {createdAt}</small>
      </Card.Footer>
    </Card>
  );
}

export default Article;
