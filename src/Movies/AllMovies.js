import React from "react";
import { useSelector } from "react-redux";
import MovieDataComp from "./MovieData";

const AllMoviesComp = () => {
	const storeData = useSelector((state) => state.movies);

	return (
		<div>
			{storeData.movies.map((item, index) => {
				return <MovieDataComp movieData={item} key={index} />;
			})}
		</div>
	);
};

export default AllMoviesComp;
