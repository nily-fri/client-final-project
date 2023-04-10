import axios from "axios";
import MovieSubsComp from "../Movies/MovieSubs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MemberDataComp = (props) => {
	const navigate = useNavigate();

	const [isShown, setIsShown] = useState(false);

	const deleteMember = async () => {
		let resp = await axios.delete(
			`http://localhost:8080/api/members/${props.memberData._id}`
		);
		alert(resp.data);
		const refresh = () => window.location.reload(true);
		refresh();
	};

	const editMember = () => {
		navigate(`editMember/${props.memberData._id}`);
	};

	let subs = props.memberData.subscription;

	subs.forEach((element) => {
		return element.moviename, element.date;
	});

	const handleClick = (event) => {
		setIsShown((current) => !current);
	};

	const sendData = async (d) => {
		const isEmpty = Object.values(d).some((x) => x === null || x === "");

		try {
			if (!isEmpty) {
				let newSub = props.memberData.subscription;

				newSub.push(d);

				let req = {
					subscription: newSub,
				};

				await axios.patch(
					`http://localhost:8080/api/members/${props.memberData._id}`,
					req
				);
				alert("refresh for update");
			} else {
				alert("missing name or date");
			}
		} catch {
			alert("empty");
		}
	};

	return (
		<div style={{ borderStyle: "solid", borderColor: "pink", margin: "5px" }}>
			<div>{props.memberData.full_name}</div>
			Email : {props.memberData.email} <br />
			<br />
			City : {props.memberData.city} <br />
			<br />
			<input type="button" value="edit member" onClick={editMember} />
			<input type="button" value="remove member" onClick={deleteMember} />
			<br />
			<br />
			<div style={{ color: "pink" }}>
				subscriptions:
				<ul style={{ listStyleType: "none" }}>
					{subs &&
						subs.map((sub, index) => (
							<li key={index}>
								<Link to={`?name=${sub.moviename}`}>{sub.moviename} </Link> ,{" "}
								{sub.date.replace("T00:00:00.000Z", "")}
							</li>
						))}
				</ul>
				<button onClick={handleClick}>subscribe to new movie</button>
				{isShown && (
					<div>
						<MovieSubsComp sendData={sendData} />
					</div>
				)}
			</div>
		</div>
	);
};

export default MemberDataComp;
