import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditMovieComp = () => {
	const navigate = useNavigate();

	const params = useParams();

	const [movieData, setMovieData] = useState({
		name: "",
		premier_year: "",
		genres: [],
		image: "",
	});

	useEffect(() => {
		async function loadMovieData() {
			let resp = await axios.get(
				`http://localhost:8080/api/movies/${params.id}`
			);
			setMovieData(resp.data);
		}

		loadMovieData();
	}, []);

	const editMovie = async () => {
		let resp = await axios.patch(
			`http://localhost:8080/api/movies/${params.id}`,
			movieData
		);

		if (resp.data._id.length > 0) {
			console.log("edited");
		} else {
			console.log(resp);
		}
		alert("saved changes");
		navigate("/home");
	};

	const goBack = () => {
		navigate("/home");
	};

	return (
		<div>
			<h3>Edit movie</h3>
			Name:{" "}
			<input
				type="text"
				defaultValue={movieData.name}
				onChange={(e) => setMovieData({ ...movieData, name: e.target.value })}
			/>
			<br />
			Premier Year:{" "}
			<input
				type="text"
				defaultValue={movieData.premier_year}
				onChange={(e) =>
					setMovieData({ ...movieData, premier_year: +e.target.value })
				}
			/>
			<br />
			Genres:{" "}
			<input
				type="text"
				defaultValue={movieData.genres}
				onChange={(e) => setMovieData({ ...movieData, genres: e.target.value })}
			/>
			<br />
			Image URL:{" "}
			<input
				type="text"
				defaultValue={movieData.image}
				onChange={(e) => setMovieData({ ...movieData, image: e.target.value })}
			/>
			<br />
			<input type="button" value="save" onClick={editMovie} />
			<input type="button" value="cancel" onClick={goBack} />
		</div>
	);
};

export default EditMovieComp;
