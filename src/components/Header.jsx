import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute py-2 px-8 bg-gradient-to-b from-black z-10 text-white w-screen flex justify-between">
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo-img"
        className="w-44"
      />
      {user && (
        <div className="flex items-center">
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
