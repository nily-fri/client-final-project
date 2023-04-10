import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMemberComp = () => {
	const navigate = useNavigate();

	const [member, setMember] = useState({
		full_name: "",
		email: "",
		city: "",
	});

	const AddMember = async () => {
		let resp = await axios.post("http://localhost:8080/api/members", member);
		if (resp.status === 400) {
			console.log("added");
		}
		navigate(-1);
	};

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div>
			<h3>add new member</h3>
			Name :{" "}
			<input
				type="text"
				placeholder="john smith"
				onChange={(e) => setMember({ ...member, full_name: e.target.value })}
			/>
			<br />
			Email :{" "}
			<input
				type="text"
				placeholder="email@gmail.com"
				onChange={(e) => setMember({ ...member, email: e.target.value })}
			/>
			<br />
			city :{" "}
			<input
				type="text"
				placeholder="city name"
				onChange={(e) => setMember({ ...member, city: e.target.value })}
			/>
			<br />
			<input type="button" value="save" onClick={AddMember} />
			<input type="button" value="cancel" onClick={goBack} />
		</div>
	);
};

export default AddMemberComp;
