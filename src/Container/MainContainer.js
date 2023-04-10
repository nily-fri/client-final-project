import React from "react";
import AddMovieComp from "../Movies/AddMovie";
import AllMoviesComp from "../Movies/AllMovies";
import AllMemebrsComp from "../Members/AllMemebrs";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import MoviesPageComp from "../Movies/MoviesPage";
import MembersPageComp from "../Members/MembersPage";
import EditMovieComp from "../Movies/EditMovie";
import AddMemberComp from "../Members/AddMember";
import EditMemberComp from "../Members/EditMember";
import SearchMovieComp from "../Movies/SearchMovie";
import OneMovieComp from "../Movies/OneMovie";

const MainContainerComp = () => {
	const navigate = useNavigate();

	function logOut() {
		navigate("/");
	}

	return (
		<div>
			<div style={{ display: "flex", margin: "3px" }}>
				<span style={{ fontSize: "15px" }}>
					hello {window.sessionStorage.getItem("fullname")}!
				</span>
				<input type="button" value="log out" onClick={logOut} />
			</div>
			<Link to="/home">movies</Link> &nbsp;
			<Link to="members">members</Link>
			<Routes>
				<Route path="" element={<MoviesPageComp />}>
					<Route path="" element={<AllMoviesComp />} />
				</Route>
				<Route path="home/newMovie" element={<AddMovieComp />} />
				<Route path="home/search" element={<SearchMovieComp />} />

				<Route path="members/name?" element={<OneMovieComp />} />
				<Route path="editMovie/:id" element={<EditMovieComp />} />

				<Route path="members" element={<MembersPageComp />}>
					<Route path="" element={<AllMemebrsComp />} />
					<Route path="newMember" element={<AddMemberComp />} />
					<Route path="editMember/:id" element={<EditMemberComp />} />
				</Route>
			</Routes>
		</div>
	);
};

export default MainContainerComp;
