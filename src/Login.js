import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(userAuth => {
        dispatch(login({
            email: userAuth.user.email,
            uid : userAuth.user.uid,
            displayName: userAuth.user.uid.displayName,
            photoURL : userAuth.user.photoURL
        }))
    }).catch((error) => alert(error))
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG34.png"
        alt=""
      />
      <form>
        <input
          placeholder="Full Name(Required If Registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          placeholder="Profile Pic URL(optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a memeber?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
