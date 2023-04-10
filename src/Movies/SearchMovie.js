import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const SearchMovieComp = () => {
	const [searchParams] = useSearchParams();
	const [values, setValues] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/movies/find/${searchParams.get("value")}`)
			.then((x) => {
				setValues(x.data);
			});
	}, []);
	return (
		<div>
			<br />
			did you mean...?
			<div
				style={{ display: "flex", justifyContent: "center", margin: "30px" }}
			>
				<ul
					style={{
						border: "1px solid pink",
						width: "fit-content",
						margin: "3px",
					}}
				>
					{values &&
						values.map((v, index) => {
							return <li key={index}>{v.name}</li>;
						})}
				</ul>
			</div>
		</div>
	);
};

export default SearchMovieComp;
