import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditMemberComp = () => {
	const navigate = useNavigate();

	const params = useParams();

	const [memberData, setMemberData] = useState({
		full_name: "",
		email: "",
		city: "",
	});

	useEffect(() => {
		async function loadMemberData() {
			let resp = await axios.get(
				`http://localhost:8080/api/members/${params.id}`
			);
			setMemberData(resp.data);
		}

		loadMemberData();
	}, []);

	const editMember = async () => {
		let resp = await axios.patch(
			`http://localhost:8080/api/members/${params.id}`,
			memberData
		);

		if (resp.data._id.length > 0) {
			alert("saved changes");
		}

		navigate(-1);
	};

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div>
			<h3>Edit member</h3>
			Name:{" "}
			<input
				type="text"
				defaultValue={memberData.full_name}
				onChange={(e) => setMemberData({ ...memberData, name: e.target.value })}
			/>
			<br />
			email:{" "}
			<input
				type="text"
				defaultValue={memberData.email}
				onChange={(e) =>
					setMemberData({ ...memberData, premier_year: +e.target.value })
				}
			/>
			<br />
			City:{" "}
			<input
				type="text"
				defaultValue={memberData.city}
				onChange={(e) =>
					setMemberData({ ...memberData, image: e.target.value })
				}
			/>
			<br />
			<input type="button" value="save" onClick={editMember} />
			<input type="button" value="cancel" onClick={goBack} />
		</div>
	);
};

export default EditMemberComp;
