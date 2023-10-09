import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleToggleSignIn = () => {
    setIsSignInForm((prevState) => !prevState);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="http://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt="login-bg"
        />

        <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 top-6 rounded-lg bg-opacity-80 ">
          <h1 className="font-bold text-3xl py-4 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Name"
              className="p-2 my-2 w-full bg-gray-700"
            />
          )}

          <input
            type="email"
            placeholder="Enter email"
            className="p-2 my-2 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="p-2 my-2 w-full bg-gray-700"
          />
          <button className="p-4 my-4 bg-red-700 w-full text-white rounded-lg">
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
