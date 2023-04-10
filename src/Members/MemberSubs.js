import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MemberSubsComp = (props) => {
	const [subs, setSubs] = useState([]);

	useEffect(() => {
		async function getSubs() {
			let resp = await axios.get(`http://localhost:8080/api/members/`);
			let arr = resp.data;

			arr.forEach((sub) => {
				let movieNames = sub.subscription;
				movieNames.forEach((mv) => {
					if (mv.moviename === props.name) {
						setSubs((oldState) => [
							...oldState,
							{ member: sub.full_name, date: mv.date, id: sub._id },
						]);
					}
				});
				return sub;
			});
		}
		getSubs();
	}, []);

	return (
		<div>
			<ul style={{ listStyleType: "none", padding: "0", margin: "3px" }}>
				{subs &&
					subs.map((s, index) => {
						return (
							<li key={index}>
								<Link to={`members/editMember/${s.id}`}>{s.member}</Link>
								{s.date.replace("T00:00:00.000Z", "")}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default MemberSubsComp;
