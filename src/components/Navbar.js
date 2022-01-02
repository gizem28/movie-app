import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const signOutFunc = async () => {
    await signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid ">
        <a className="navbar-brand" href="/" style={{ color: "white", fontSize:40}}>
          React Movie App 🎬
        </a>
        <div className="buttons ms-auto">
          {currentUser ? (
            <h5 style={{margin:20}}>{currentUser.displayName}</h5>) : (<button
              type="button"
              style={{marginRight:20}}
              className="ms-2 btn"
              onClick={() => navigate("/login")}>
              Login
            </button>
          )}
          {currentUser ? (
            <button
              type="button"
              className="ms-2 btn"
              style={{marginRight:20}}
              onClick={() => signOutFunc()}>Logout
            </button>) : (
            <button
              type="button"
              className="ms-2 btn"
              onClick={() => navigate("/register")}>
              Register
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;