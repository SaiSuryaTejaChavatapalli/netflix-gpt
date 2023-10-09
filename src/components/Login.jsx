import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleToggleSignIn = () => {
    setIsSignInForm((prevState) => !prevState);
  };
  const handleFormSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="http://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt="login-bg"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 top-6 rounded-lg bg-opacity-80 "
        >
          <h1 className="font-bold text-3xl py-4 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Name"
              className="p-2 my-2 w-full bg-gray-700"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Enter email"
            className="p-2 my-2 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter password"
            className="p-2 my-2 w-full bg-gray-700"
          />
          <p className="text-red-600 font-bold">{errorMessage}</p>
          <button
            className="p-4 my-4 bg-red-700 w-full text-white rounded-lg"
            onClick={handleFormSubmit}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-6 text-sm text-white cursor-pointer"
            onClick={handleToggleSignIn}
          >
            {isSignInForm
              ? "New to Netflix? SignUp now"
              : "Already registered? SignIn"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
