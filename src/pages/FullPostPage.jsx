import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function FullPostPage({ match }) {
  const [post, setPost] = React.useState();
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${match.params.id}`)
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${match.params.id}/comments`)
      .then(({ data }) => {
        setComments(data);
      });
  }, []);

  return (
    <div>
      <Button>
        <Link to="/">Back</Link>
      </Button>
      {!loading ? (
        <React.Fragment>
          <Card className="mt-4">
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created at: {post.createdAt}</small>
            </Card.Footer>
          </Card>
          <br />
        </React.Fragment>
      ) : (
        <h1>Loading...</h1>
      )}
      <h3 className="mb-3 mt-4">Comments</h3>
      {!loading ? (
        comments.map((obj) => (
          <React.Fragment>
            <Card className="mb-4">
              <Card.Body>
                <Card.Subtitle className="mb-2">{obj.name}</Card.Subtitle>
                <Card.Text>{obj.text}</Card.Text>
              </Card.Body>
            </Card>
          </React.Fragment>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default FullPostPage;
