import React from "react";
import Form from "../Form/form";
import img from "../assets/img.png";
import "./login.css";

const Login = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <h2>Authentication</h2>
        <p>Optimiza rutas de distribución y geolocaliza comercios</p>
        <img src={img} alt="image" />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
};

export default Login;
