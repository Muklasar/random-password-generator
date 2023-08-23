import React, { useState, useEffect } from "react";
import "./App.css";
import copy from "clipboard-copy";
import PreviousPasswords from "./components/PreviousPasswords";
import { ToastContainer, toast } from "react-toastify";
import PasswordGenerator from "./components/PasswordGenerator";
import DisplayPassword from "./components/DisplayPassword";
import Nav from "./components/nav";

function App() {
  const [password, setPassword] = useState("");
  const [previousPasswords, setPreviousPasswords] = useState([]);

  useEffect(() => {
    const storedPasswords =
      JSON.parse(localStorage.getItem("previousPasswords")) || [];
    setPreviousPasswords(storedPasswords);
  }, []);

  const copyToClipboard = (password) => {
    copy(password);
    toast.success("Password copied");
  };

  const state = {
    password,
    previousPasswords,
    setPassword,
    setPreviousPasswords,
    copyToClipboard,
  };

  return (
    <div>
      <ToastContainer />
      <Nav />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 p-3">
            <h4 className="text-center mb-2">Generate a new Password</h4>
            <PasswordGenerator state={state} />
            {password && <DisplayPassword state={state} />}
          </div>

          <div className="col-lg-6 col-md-12 p-3">
            <h4 className="text-center mb-2">Previous Passwords</h4>
            {previousPasswords.length > 0 ? (
              <PreviousPasswords state={state} />
            ):
            <div className="card p-5 h-100">
              Does not have any previous password
              Please generate a new password  
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
