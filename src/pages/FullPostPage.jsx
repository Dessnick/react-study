import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { StateContext } from '../App';

function FullPostPage({ match }) {
  const [state, dispatch] = React.useContext(StateContext);

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: 'SET_LOADED',
        payload: false,
      });

      const respArticle = await axios.get(
        `https://5c3755177820ff0014d92711.mockapi.io/articles/${match.params.id}`,
      );
      const respComments = await axios.get(
        `https://5c3755177820ff0014d92711.mockapi.io/articles/${match.params.id}/comments`,
      );

      const articleJSON = respArticle.data;
      const commentsJSON = respComments.data;

      dispatch({
        type: 'LOAD_ARTICLE_DATA',
        payload: { articleJSON, commentsJSON },
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <Button variant="primary">
        <Link to="/">Back</Link>
      </Button>
      {state.isLoaded ? (
        <React.Fragment>
          <Card className="mt-4">
            <Card.Img variant="top" src={state.currentPost.image} />
            <Card.Body>
              <Card.Title>{state.currentPost.title}</Card.Title>
              <Card.Text>{state.currentPost.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created at: {state.currentPost.createdAt}</small>
            </Card.Footer>
          </Card>
          <br />
        </React.Fragment>
      ) : (
        <h1>Loading...</h1>
      )}
      <h3 className="mb-3 mt-4">Comments</h3>
      {state.isLoaded ? (
        state.comments.map((obj) => (
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
