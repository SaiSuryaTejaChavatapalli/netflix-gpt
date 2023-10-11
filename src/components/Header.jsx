import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { mainLogo } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        console.log("OnAuthChanged", { uid, displayName, email, photoURL });
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 bg-gradient-to-b from-black z-10 text-white w-screen flex justify-between">
      <img src={mainLogo} alt="logo-img" className="w-44" />
      {user && (
        <div className="flex items-center">
          <button
            className="bg-purple-600 rounded-lg text-white p-2"
            onClick={handleToggleGptSearch}
          >
            GPT Search
          </button>
          <img
            src={user?.photoURL}
            alt="profile-icon"
            className="w-12 h-12 py-2 mx-2"
          />
          <h3 className="cursor-pointer font-bold" onClick={handleSignOut}>
            (SignOut)
          </h3>
        </div>
      )}
    </div>
  );
};

export default Header;
