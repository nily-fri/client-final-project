import React from "react";
import MainContainerComp from "./Container/MainContainer";
import LoginComp from "./authentication/LoginComp";
import { Route, Routes } from "react-router-dom";
import MembersPageComp from "./Members/MembersPage";

const MainPageComp = () => {
	return (
		<div>
			<Routes>
				<Route path="" element={<LoginComp />} />
				<Route path="/home/*" element={<MainContainerComp />}>
				</Route>
			</Routes>
			<footer
				style={{
					position: "sticky",
					padding: "3px",
					backgroundColor: "pink",
					marginTop: "30px",
				}}
			>
				<span> Nily Friedman's Project </span>
			</footer>
		</div>
	);
};

export default MainPageComp;
