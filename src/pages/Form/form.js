import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, errorState } from "../../store/auth-slice";
import { useNavigate } from "react-router";
import "./form.css";

const Form = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
    setCredentials({ username: "", password: "" });
  };

  return (
    <div>
      <h2>To Access</h2>
      <form onSubmit={submitHandler}>
        <label>User Name:</label>
        <input
          required
          type="text"
          value={credentials.username}
          onChange={(e) =>
            setCredentials(
              (prev) => ({ ...prev, username: e.target.value }),
              dispatch(errorState())
            )
          }
        />

        <br />
        <label>Password:</label>
        <input
          required
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials(
              (prev) => ({ ...prev, password: e.target.value }),
              dispatch(errorState())
            )
          }
        />

        {error && (
          <p className="text-red-500 font-medium text-sm mt-2">
            {error.message}
          </p>
        )}
        <button>LogIn</button>
      </form>
    </div>
  );
};

export default Form;
