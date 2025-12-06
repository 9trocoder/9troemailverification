import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import {
  ref,
  query,
  orderByChild,
  equalTo,
  get,
  update,
} from "firebase/database";
import Spinner from "./Spinner"; // Assuming .jsx is resolved by Vite
import SuccessIcon from "./SuccessIcon";
import ErrorIcon from "./ErrorIcon";
import "./App.css";

function App() {
  // 'loading', 'success', 'error'
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState({
    title: "Verifying your email...",
    body: "Please wait while we confirm your email address.",
  });

  useEffect(() => {
    const verifyEmail = async () => {
      setStatus("loading");
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage({
          title: "Verification Failed",
          body: "No verification token found. Please try the link from your email again.",
        });
        return;
      }

      try {
        const usersRef = ref(db, "users");
        const userQuery = query(
          usersRef,
          orderByChild("verificationToken"),
          equalTo(token)
        );
        const snapshot = await get(userQuery);

        if (snapshot.exists()) {
          const userId = Object.keys(snapshot.val())[0];
          const userRef = ref(db, `users/${userId}`);

          await update(userRef, {
            isEmailVerified: true,
            verificationToken: null, // Remove the token
          });

          setStatus("success");
          setMessage({
            title: "Success!",
            body: "Your email has been verified. You can now return to the app and log in.",
          });
        } else {
          setStatus("error");
          setMessage({
            title: "Verification Failed",
            body: "This verification link is invalid or has already been used. Please try signing up again.",
          });
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
        setMessage({
          title: "An Error Occurred",
          body: "Something went wrong during verification. Please try again later.",
        });
      }
    };

    verifyEmail();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className='container'>
      {status === "loading" && <Spinner />}
      {status === "success" && <SuccessIcon />}
      {status === "error" && <ErrorIcon />}
      <h1>{message.title}</h1>
      <p>{message.body}</p>
    </div>
  );
}

export default App;
