
import { applyMiddleware, createStore } from "redux"
import { moviesReducer } from "./moviesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

export const store=createStore(moviesReducer, applyMiddleware(thunk));