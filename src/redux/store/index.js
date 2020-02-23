import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
let appliedMiddlewares = applyMiddleware(...middleware);

appliedMiddlewares = composeWithDevTools(applyMiddleware(...middleware));

let store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export const configureStore = preloadedState => {
  store = createStore(rootReducer, preloadedState, appliedMiddlewares);
  return store;
};

if (module.hot) {
  module.hot.accept("../reducers", () => {
    const nextRootReducer = require("../reducers").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
