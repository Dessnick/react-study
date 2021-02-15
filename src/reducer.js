export const initialState = {
  articles: [],
  visibleModal: false,
  comments: [],
  isLoaded: false,
  currentPost: { title: "", image: "", text: "" }
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
        isLoaded: true
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload
      };

    case "LOAD_ARTICLE":
      return {
        ...state,
        currentPost: action.payload,
        isLoaded: true
      };

    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
        isLoaded: true
      };

    case "OPEN_MODAL":
      return {
        ...state,
        visibleModal: true,
        currentPost: action.payload
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        currentPost: {},
        visibleModal: false
      };

    case "ADD_ARTICLE":
      return {
        ...state,
        articles: [
          ...state.articles,
          {
            ...action.payload
          }
        ],
        visibleModal: false,
        isLoaded: true
      };

    case "REMOVE_ARTICLE":
      return {
        ...state,
        articles: state.articles.filter((obj) => obj.id !== action.payload)
      };

    default:
      break;
  }
}
