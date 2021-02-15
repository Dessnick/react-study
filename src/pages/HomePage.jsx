import React from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

import AddEditArticleModal from "../components/AddEditArticleModal";
import Article from "../components/Article";

import { StateContext } from "../App";

function HomePage() {
  const [state, dispatch] = React.useContext(StateContext);

  React.useEffect(() => {
    dispatch({
      type: "SET_LOADED",
      payload: false
    });
    axios
      .get("https://5c3755177820ff0014d92711.mockapi.io/articles")
      .then(({ data }) => {
        dispatch({
          type: "SET_ARTICLES",
          payload: data
        });
      });
  }, []);

  const openModal = (data) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: data
    });
  };

  const onRemoveArticle = (id) => {
    if (window.confirm("Are you want DELETE this post?")) {
      axios
        .delete(`https://5c3755177820ff0014d92711.mockapi.io/articles/${id}`)
        .then(() => {
          dispatch({
            type: "REMOVE_ARTICLE",
            payload: id
          });
        });
    }
  };

  return (
    <Container>
      <Button onClick={() => openModal({ title: "", image: "", text: "" })}>
        Add article
      </Button>
      <AddEditArticleModal openModal={state.visibleModal} />
      <CardColumns className="mt-4">
        {state.isLoaded ? (
          state.articles
            .slice(0)
            .reverse()
            .map((obj) => (
              <Article
                key={obj.id}
                id={obj.id}
                title={obj.title}
                image={obj.image}
                text={obj.text}
                createdAt={obj.createdAt}
                onEdit={() => openModal(obj)}
                onRemove={onRemoveArticle}
              />
            ))
        ) : (
          <h1>'Loading...'</h1>
        )}
      </CardColumns>
    </Container>
  );
}

export default HomePage;
