import React from "react";
import Navbar from "../components/Navbar";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-col self-center mt-8 p-8 mr-12">
        <h1 className="text-3xl">MY PROFILE</h1>
        <h2 className="text-xl mt-5 ">Email: {user.email}</h2>
        <h2 className="text-xl mt-5">Date of Birth:</h2>
        <h2 className="text-xl mt-5">Size:</h2>
        <Button
          onClick={logout}
          sx={{
            color: "white",
            backgroundColor: "black",
            marginTop: 2,
            "&:hover": {
              backgroundColor: "red", // Change the hover color to gray
            },
          }}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
