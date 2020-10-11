import { Platform } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import devTools from "remote-redux-devtools";
import promise from "redux-promise";
import thunk from "redux-thunk";

import RootReducer from "./Reducers";

const midddeware = applyMiddleware(promise, thunk);

const Store = createStore(
  RootReducer,
  compose(
    midddeware,
    devTools({
      name: Platform.OS,
      hostname: "localhost",
      port: 5678
    })
  )
);

export default Store;
