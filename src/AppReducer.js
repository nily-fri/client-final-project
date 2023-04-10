import MembersReducer from "./MembersReducer";
import MoviesReducer from "./MoviesReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
	members: MembersReducer,
	movies: MoviesReducer,
});

export default appReducer;
