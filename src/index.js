import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { applyMiddleware,legacy_createStore as createStore } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";


// Create store with the reducers and
// apply thunk as a middleware
const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
	document.getElementById("root"));

root.render(
<Provider store={store}>
	<App />
</Provider>
);
