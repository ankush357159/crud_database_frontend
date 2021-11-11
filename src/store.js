import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getDataReducer, newDataReducer } from "./reducers/dataReducer";

const reducer = combineReducers({
	getData: getDataReducer,
	newData: newDataReducer,
});

const middleware = [thunk];

let initialState = {};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
