import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function AboutPage() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>About us</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default AboutPage;
