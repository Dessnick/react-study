import React from 'react';
import { Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { HomePage, AboutPage, FullPostPage } from './pages';
import Navigation from './components/Navigation';
import { initialState, reducer } from './reducer';

export const StateContext = React.createContext();

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleSearchChange = (data) => {
    dispatch({
      type: 'SET_ARTICLES',
      payload: data,
    });
  };

  return (
    <Container>
      <StateContext.Provider value={[state, dispatch]}>
        <Navigation onSearchChange={handleSearchChange} />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/articles/:id" component={FullPostPage}></Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </StateContext.Provider>
    </Container>
  );
}

export default App;
