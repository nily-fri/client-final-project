import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginComp() {
	const navigate = useNavigate();
	const [username, setUsername] = useState({ username: "" });
	const [password, setPassword] = useState({ password: "" });

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			let resp = await axios.post("http://localhost:8080/api/login", {
				username,
				password,
			});

			sessionStorage.setItem("fullname", resp.data);

			alert("logged in");
			navigate("/home");
		} catch (e) {
			alert(e.message);
		}
	}

	function validateForm() {
		return username.length > 0;
	}

	return (
		<div className="App">
			<h3>Login Page</h3>
			<form onSubmit={handleSubmit}>
				<>
					<label>Username </label>
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</>
				<br />
				<>
					<label>Password </label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</>
				<br />

				<button block="true" type="submit" disabled={!validateForm()}>
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginComp;
