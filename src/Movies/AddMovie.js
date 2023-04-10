import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovieComp = () => {
	const navigate = useNavigate();

	const [movie, setMovie] = useState({
		name: "",
		premier_year: 0,
		genres: [],
		image: "",
	});

	const addMovie = async () => {
		let resp = await axios.post("http://localhost:8080/api/movies", movie);
		if (resp.data._id.length > 0) {
			console.log("added");
		} else {
			console.log(resp);
		}
		navigate("/home");
	};

	const goBack = () => {
		navigate("/home");
	};

	return (
		<div>
			<h3>add new movie</h3>
			Name:{" "}
			<input
				type="text"
				placeholder="movie name"
				onChange={(e) => setMovie({ ...movie, name: e.target.value })}
			/>
			<br />
			Premier Year:{" "}
			<input
				type="text"
				placeholder="2023"
				onChange={(e) => setMovie({ ...movie, premier_year: +e.target.value })}
			/>
			<br />
			Genres:{" "}
			<input
				type="text"
				placeholder="comedy romance"
				onChange={(e) => setMovie({ ...movie, genres: e.target.value })}
			/>
			<br />
			Image URL:{" "}
			<input
				type="text"
				placeholder="picture.com"
				onChange={(e) => setMovie({ ...movie, image: e.target.value })}
			/>
			<br />
			<input type="button" value="save" onClick={addMovie} />
			<input type="button" value="cancel" onClick={goBack} />
		</div>
	);
};

export default AddMovieComp;
