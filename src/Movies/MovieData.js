import axios from "axios";
import { useNavigate } from "react-router-dom";
import MemberSubsComp from "../Members/MemberSubs";

const MovieDataComp = (props) => {
	const navigate = useNavigate();

	const deleteMovie = async () => {
		let resp = await axios.delete(
			`http://localhost:8080/api/movies/${props.movieData._id}`
		);
		alert(resp.data);

		await axios.delete(
			`http://localhost:8080/api/members/deleteMovieForMember/${props.movieData.name}`
		);
		const refresh = () => window.location.reload(true);
		refresh();
	};

	const editMovie = () => {
		navigate(`/home/editMovie/${props.movieData._id}`);
	};

	return (
		<div style={{ borderStyle: "solid", borderColor: "pink", margin: "5px" }}>
			<div>
				{props.movieData.name},{props.movieData.premier_year}
			</div>
			Genres: {props.movieData.genres}
			<br />
			<br />
			<img
				style={{ width: "400px" }}
				src={props.movieData.image}
				alt={props.movieData.name}
			/>
			<br />
			<input type="button" value="edit" onClick={editMovie} />
			<input type="button" value="remove" onClick={deleteMovie} />
			<br />
			<div
				style={{ border: "solid pink", color: "pink", display: "inline-block" }}
			>
				subscribed:
				<div>
					<MemberSubsComp name={props.movieData.name} />`
				</div>
			</div>
		</div>
	);
};

export default MovieDataComp;
