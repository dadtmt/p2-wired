import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import "bootstrap/dist/css/bootstrap.min.css"

import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import moviesReducer from "./reducers/moviesReducer"
import loadingReducer from "./reducers/loadingReducer"

const store = createStore(
  combineReducers({
    movies: moviesReducer,
    loading: loadingReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
