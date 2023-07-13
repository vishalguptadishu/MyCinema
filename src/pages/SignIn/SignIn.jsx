import { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSignUp() {
    let user_info = {
      fullName,
      email,
      password
    };
    let user_obj = JSON.parse(localStorage.getItem("alluser_info") || "[]");

    let arrOfUser = [...user_obj, user_info];
    localStorage.setItem("alluser_info", JSON.stringify(arrOfUser));
    alert("Sign up");
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <label htmlFor="full-name">Full Name</label>
      <input
        type="text"
        id="full-name"
        placeholder="Full Name"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email ID"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={handleSignUp}>Sign Up</button>
       <div className="Link_navigat">
       already Sing in <Link to={"/LogIn"}>Click hear</Link> 
       </div>
      
    </div>
  );

};

export default SignUp;
