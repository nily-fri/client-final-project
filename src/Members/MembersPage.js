import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const MembersPageComp = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		async function loadMembers() {
			let resp = await axios.get("http://localhost:8080/api/members");
			dispatch({ type: "LOADMEMBERS", payload: resp.data });
		}

		loadMembers();
	}, []);

	return (
		<div>
			<h3>Members</h3>
			<nav>
				<span>
					<Link to="">all member</Link>{" "}
				</span>
				<span>
					<Link to="newMember">add member</Link>
				</span>
				<br />
			</nav>
			<Outlet />
		</div>
	);
};

export default MembersPageComp;
