const MoviesReducer = (state = { movies: [] }, action) => {
	switch (action.type) {
		case "LOADDATA":
			return { ...state, movies: action.payload };

		default:
			return state;
	}
};

export default MoviesReducer;
