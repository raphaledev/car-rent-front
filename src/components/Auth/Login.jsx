import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://car-rent-mern.herokuapp.com/api/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			navigate ('/dashbord');
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
        <div className="m-5">
            <Navbar/>
            <hr></hr>
            <h1 className="text-center text-4xl my-5">Connexion Sur l'Espace Admin</h1>
            <form className="flex flex-col m-5 items-center" onSubmit={handleSubmit}>
                <label>
                    Adresse Email
                    <input
                        className="w-48 m-4 px-4 py-2 rounded-md"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                    />
                </label>
                <label>
                    Mot de Passe
                    <input
                        className="w-48 m-4 px-4 py-2 rounded-md"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                    />
                </label>
                    {error && <div className="errorMsg">{error}</div>}
                    <button type="submit" className="m-4 rounded-md bg-blue-700 text-white font-bold">
                        Connexion
                    </button>
                </form>
		</div>
	);
};

export default Login;