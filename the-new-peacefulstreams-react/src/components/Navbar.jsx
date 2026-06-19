import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <nav className="p-4 shadow-md flex justify-between-items-center bg-white">
      <div className="flex gap-4">
        <Link to="/" className="hover:opacity-75">
          Home
        </Link>
        <Link to="/devotions" className="hover:opacity-75">
          Devotions
        </Link>
        <Link to="/about" className="hover:opacity-75">
          About
        </Link>
        <Link to="/contact" className="hover:opacity-75">
          Contact
        </Link>
        <Link to="/bible" className="hover:opacity-75">
          Bible
        </Link>
        <Link to="/encouragement" className="hover:opacity-75">
          Encouragement
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="">
          {user ? (
            <>
              <span>Welcome, {user.email}</span>

              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:opacity-75">
                Login
              </Link>
              <Link to="/Signup" className="hover:opacity-75">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
