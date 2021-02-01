import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { HomePage, AboutPage, FullPostPage } from './pages';
import Navigation from './components/Navigation';

function App() {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://5c3755177820ff0014d92711.mockapi.io/posts').then(({ data }) => {
      setNews((news) => [...news, ...data]);
    });
  }, []);

  return (
    <Container>
      <Navigation updateData={() => setNews([])} />
      <Route exact path="/">
        <HomePage news={news} />
      </Route>
      <Route exact path="/post/:id" component={FullPostPage}></Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
    </Container>
  );
}

export default App;
