import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { defaultUserAvatar } from "../utils/constants";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: defaultUserAvatar,
          })
            .then(() => {
              const { email, displayName, photoURL, uid } = auth.currentUser;
              console.log("AFter update", {
                email,
                displayName,
                photoURL,
                uid,
              });
              dispatch(addUser({ email, displayName, photoURL, uid }));
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error SignUp", errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
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
          className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 top-6 rounded-lg bg-opacity-80 text-white"
        >
          <h1 className="font-bold text-3xl py-4">
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
            className="p-4 my-4 bg-red-700 w-full rounded-lg"
            onClick={handleFormSubmit}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-6 text-sm  cursor-pointer"
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
