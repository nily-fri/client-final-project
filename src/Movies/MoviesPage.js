import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviesPageComp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchValues, setSearchValues] = useState([]);

	useEffect(() => {
		async function loadMovies() {
			let resp = await axios.get("http://localhost:8080/api/movies");
			dispatch({ type: "LOADDATA", payload: resp.data });
		}

		loadMovies();
	}, []);

	const searchMovie = async (item) => {
		setSearchValues(item);
	};

	const goToSearch = () => {
		navigate(`home/search?value=${searchValues}`);
	};

	return (
		<div>
			<h3>Movies</h3>
			find movie:{" "}
			<input type="text" onChange={(e) => searchMovie(e.target.value)} />
			<input type="button" value="search" onClick={goToSearch} />
			<br />
			<nav>
				<span>
					{" "}
					<Link to="/home">all movies</Link>{" "}
				</span>
				<span>
					<Link to="home/newMovie">add movie</Link>
				</span>
				<br />
			</nav>
			<Outlet />
		</div>
	);
};

export default MoviesPageComp;
