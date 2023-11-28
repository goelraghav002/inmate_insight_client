import { useState } from "react";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

import { login } from '../actions/auth.actions'
import { useDispatch, useSelector } from "react-redux";

const LoginFormCard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Navigate to={`/`} replace />;
  }

  return (
    <div className="flex justify-center items-center h-full flex-col p-4">
      <h1 className="block text-4xl font-bold">Inmate Insight Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="m-6 p-2">
          <label htmlFor="email" className="mx-4 block my-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="bg-transparent border-b-2 border-gray-400 outline-none px-2 mx-4"
          />
        </div>
        <div className="m-6 p-2">
          <label htmlFor="password" className="mx-4 block my-2 font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="bg-transparent border-b-2 border-gray-400 outline-none px-2 mx-4"
          />
        </div>

        <div className="m-6 p-2 text-center">
          <button
            type="submit"
            className="bg-gray-900 text-white py-3 px-8 rounded-full"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300">
      <div className="flex-1 flex flex-col">
        <Navbar />

        <LoginFormCard />
      </div>
    </div>
  );
};

export default Login;
