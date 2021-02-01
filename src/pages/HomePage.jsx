import React from 'react';
import { Link } from 'react-router-dom';

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

function HomePage({ news }) {
  return (
    <div>
      <CardColumns className="mt-4">
        {news.map((obj) => (
          <Card key={obj.id}>
            <Card.Img variant="top" src={obj.image} />
            <Card.Body>
              <Card.Title>
                <Link to={`post/${obj.id}`}>{obj.title}</Link>
              </Card.Title>
              <Card.Text>{obj.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created at: {obj.createdAt}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}

export default HomePage;
