import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import AllPhotos from "./components/AllPhotos.jsx";

const actualState = {
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: undefined,
  loading: true
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VIEW": {
      return {
        ...state,
        currentView: action.payload.currentView,
        selectedPhoto: state.photos[action.payload.index]
      };
    }
    case "DOWNLOAD_PHOTOS": {
      return {
        ...state,
        photos: action.payload.photos,
        loading: action.payload.loading
      };
    }
    case "UPLOAD": {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  appReducer,
  actualState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
