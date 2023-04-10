import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieSubsComp = (props) => {
	const [movies, setMovies] = useState([]);

	const [optionValue, setOptionValue] = useState("");
	const [dateValue, setdateValue] = useState("");

	const handleSelect = (e) => {
		setOptionValue(e.target.value);
	};

	const chooseDate = (e) => {
		setdateValue(e.target.value);
	};

	useEffect(() => {
		async function getMovies() {
			let resp = await axios.get("http://localhost:8080/api/movies");

			let names = resp.data.map(function (n) {
				return n["name"];
			});

			setMovies(names);
		}

		getMovies();
	}, []);

	movies.forEach((mv) => {
		return mv;
	});

	const addSub = () => {
		const subRequest = {
			moviename: optionValue,
			date: dateValue,
		};

		props.sendData(subRequest);
	};

	return (
		<div>
			<select style={{ listStyleType: "none" }} onChange={handleSelect}>
				<option>choose movie</option>
				{movies &&
					movies.map((name, index) => <option key={index}>{name}</option>)}
			</select>
			<input type="date" onChange={chooseDate} />
			<input type="button" value="add movie" onClick={addSub} />
		</div>
	);
};

export default MovieSubsComp;
