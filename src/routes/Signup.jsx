import React from "react";
import Navbar from "../components/Navbar";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const Signup = () => {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    if (user.email !== undefined) {
      navigate("/main");
    }
  }, []);

  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (currentUser && user.email !== null) {
      navigate("/main");
    }
  });

  const [personalDetails, setPersonalDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const submitChange = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        personalDetails.email,
        personalDetails.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex self-center mt-8 p-8 mr-12">
        <h1 className="text-3xl">SIGN UP</h1>
      </div>
      <div className="flex flex-col w-1/4 justify-center self-center">
        <TextField
          id="outlined-basic"
          label="Enter your email adress"
          variant="outlined"
          name="email"
          value={personalDetails.email}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Enter password"
          variant="outlined"
          name="password"
          type="password"
          value={personalDetails.password}
          onChange={handleChange}
          sx={{ marginTop: 2 }}
        />
        <Button
          sx={{ color: "white", backgroundColor: "black", marginTop: 2 }}
          onClick={submitChange}
        >
          Sign UP
        </Button>
      </div>
    </div>
  );
};
