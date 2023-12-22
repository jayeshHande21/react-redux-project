import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducers, composeWithDevTools());

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
