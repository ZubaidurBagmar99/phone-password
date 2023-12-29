import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useRef, useState } from "react";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const password = form.password.value;
    console.log(phone, password);

    setSuccess("");
    setError("");

    if (!/(?=.[A-Z])/.test(password)) {
      setError("please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("please add at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("please add at least 6 characters");
      return;
    }

    signInWithEmailAndPassword(auth, phone, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("user login successfully");
        setError("");
        // if(!loggedUser.emailVerified){}
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="w-25  mx-auto">
      <h2 className="text-center ">Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            ref={emailRef}
            className="form-control"
            id="phone"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-dark w-100 ">
          Sign In
        </button>
      </form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
      <div className="d-flex justify-content-between">
      <p>
          <small>
            {" "}
            <button onClick={handleResetPassword} className="btn btn-link text-decoration-none">
              Remember me!
            </button>{" "}
          </small>
        </p>
        <p>
          <small>
            {" "}
            <button onClick={handleResetPassword} className="btn btn-link text-decoration-none ">
              Forget Password?
            </button>{" "}
          </small>
        </p>
      </div>

      
      <button className="btn btn-outline-dark w-100 ">
        <Link to="/register" className="text-decoration-none ">
          Create a New Account
        </Link>
      </button>

      <Link to="/register" className="text-dark text-decoration-none"></Link>
    </div>
  );
};

export default Login;
