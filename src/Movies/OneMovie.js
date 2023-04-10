import MovieDataComp from "./MovieData";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const OneMovieComp = (props) => {
	
	// useEffect(() => {
	// 	async function getMovieByName() {
	// 		let resp = await axios.get(`http://localhost:8080/api/movies/name/${"d"}`);
	// 		dispatch({ type: "LOADDATA", payload: resp.data });
	// 	}

	// 	loadMovies();
	// }, []);

	return (
		<div>
			OneMovieComp
			{/* {props.a} */}
			<MovieDataComp movieData={"a"} />;
		</div>
	);
};

export default OneMovieComp;
