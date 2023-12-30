import { useRef, useState } from "react";
import {
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'






const auth = getAuth(app);
auth.useDeviceLanguage();

// const appVerifier = setUpRecaptcha();

const Register = () => {
  // const [email, setEmail] = useState('');
  
  const genderRef = useRef();
  const [number, setNumber] = useState("")
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
 
  const [flag, setFlag] = useState("")
  const [confirmObj, setConfirmObj] = useState("")
  const [varification, setVerification] = useState(null)
  const [disable, setDisable] = useState(true);
  

  const handleSubmit = async(event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const name = event.target.name.value;
    // const phone = event.target.phone.value;
    const date = event.target.date.value;
    const gender = event.target.gender.value;
    const password = event.target.password.value;
    const repeatPassword = event.target.repeatPassword.value;

    // setError("")
  
    const user = {name,date, gender,password, number }


// Authentication 
    // if (!/(?=.[A-Z])/.test(password)) {
    //   setError("please add at least one uppercase");
    //   return;
    // } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
    //   setError("please add at least two numbers");
    //   return;
    // } else if (password.length < 6) {
    //   setError("please add at least 6 characters");
    //   return;
    // }
    // if (password !== repeatPassword) {
    //   setError("password dot match");

    //   return
    // }




    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     const loggedUser = result.user;
    //     console.log(loggedUser);
    //     setError("");
    //     event.target.reset();
    //     setSuccess("User has been created successfully");
    //     sendVerificationEmail(result.user);
    //     updateUserData(result.user, name);
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //     setError(error.message);
    //   });

    //otp confirmation
     const otp = event.target.otp.value;
    try {
      
     
      const data = await  varification.confirm(otp)
      console.log(data);
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type if you're sending JSON data
          // Add any other headers as needed
        },
        body: JSON.stringify(data), // Convert the data to a JSON string
      })
    } catch (error) {
      setDisable(true)
      console.warn("Error: " + error.message)
    }
  };

 

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };




  const verifyOtp = async(e) =>{
    e.preventDefault();
    // console.log(number);
    try {
      const rechaptcha = new RecaptchaVerifier(auth,"rechaptcha",{})
      const confirmation = await signInWithPhoneNumber(auth,number,rechaptcha)
      console.log(confirmation);
      setVerification(confirmation)
      if (confirmation.verificationId) {
        setDisable(false)
      }
   } catch (error) {
      console.log(error);
   }
  }

  return (
    <div className="w-25 mx-auto">
      <h4 className="text-center ">Sign Up</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control mb-2"
            id="name"
            placeholder="Your Name"
            required
          />
          
          
          <PhoneInput
            // onChange={handleEmailChange}
            defaultCountry="BA"
            value={number}
            onChange={setNumber}
            // type="number"
            name="phone"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
            placeholder="Your Phone"
            required
          />
          <div id="recaptcha"></div>
        </div>
        <div className=" d-flex mb-3 col-12 gap-2">
          {/* <label className="form-label">Password</label> */}
          <input
            type="date"
            name="date"
            className="form-control"
            id="date"
            placeholder="Date Of Birth"
            required
          />
          {/* <input
            type="text"
            name="enter-otp"
            className="form-control"
            id="enter-otp"
            placeholder=" Gander"
            required
          /> */}
          <div className="mb-3 col-6 ">
          <select
            name="gender"
            className="form-control  "
            id="gender"
            required
            
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        </div>
       
        <div className=" d-flex mb-3 col-12 gap-2">
          {/* <label className="form-label">Password</label> */}
          <input
          
            type="number"
            name="otp"
            className="form-control"
            id="otp"
            
            placeholder="Enter-OTP"
            
          />
          {/* <input
            type="number"
            name="enter-otp"
            className="form-control"
            id="enter-otp"
            placeholder=" Get OTP"
            required
          /> */}
          <button onClick={verifyOtp}
           type="submit" className="btn btn-dark w-100 ">
          Get OTP
        </button>
        </div>
        <div id="rechaptcha"></div>
        <div className="">
          <div className=" d-flex mb-3 col-12 gap-2">
            {/* <label className="form-label">Password</label> */}
            <input
             
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <input
             
              type="password"
              name="repeatPassword"
              className="form-control"
              id="repeatPassword"
              placeholder=" Repeat Password"
              required
            />
          </div>
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-dark w-100 " disabled={disable}>
          Sign Up
        </button>
        
      </form>
      <hr />
      <button className="btn btn-outline-dark  w-100 ">
        <Link to="/login" className="text-decoration-none ">
          {" "}
          Already have an account?
        </Link>
      </button>

      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Register;
