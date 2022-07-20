import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context";

export const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuthContext();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/auth/login`, loginData);
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: true });
        toast.success("you are logged in!");
        navigate("/");
      } else {
        toast.warn("Invalid Credentials");
      }

      // saving the encodedToken in the localStorage
    } catch (error) {
      toast.warn("Invalid Credentials");
      console.log(error);
    }
  };

  const loginAsGuestHandler = (e) => {
    e.preventDefault();

    setLoginData({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
  };
  return (
    <>
      <div className="p-2 md:w-1/3 md:p-8 relative inset-0 m-auto mt-12 flex-col">
        <h1 className="text-center text-2xl my-4 uppercase kodchasan font-semibold">
          login
        </h1>
        <div className="bg-gray-800 shadow-md rounded px-4 md:px-24 pt-16 pb-4 flex flex-col">
          <form onSubmit={loginHandler}>
            {" "}
            <div className="mb-4">
              <label
                className="block text-gray-400 uppercase kodchasan text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                id="email"
                type="email"
                value={loginData.email}
                onChange={(e) => {
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  });
                }}
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-400 uppercase kodchasan text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3"
                id="password"
                type="password"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  });
                }}
                placeholder="*****************"
              />
              <p className="text-red text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center w-full justify-center">
              <button
                onClick={loginHandler}
                className="bg-rose-500 hover:bg-rose-400 w-full text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Login
              </button>
              <button
                onClick={(e) => loginAsGuestHandler(e)}
                className="border-2 bg-white border-transparent hover:border-rose-500  w-full text-gray-600 font-bold py-2 px-4 rounded"
                type="button"
              >
                Login as Guest
              </button>
            </div>
          </form>

          <p className="text-red text-xs capitalize my-8 text-right">
            need an account?
            <Link to="/signup">
              <span className="uppercase ml-8 text-blue-500 font-semibold">
                sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
