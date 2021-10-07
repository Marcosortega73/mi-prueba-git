import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./SignUpUsers.css";

const SignUpUsers = () => {

    const manejadorSubmit = e =>{
        e.preventDefault();
        console.log("HOLA LOGIN")
    }
  return (
    <>
      <main className="login-body">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
                <Link to="/" >
                <div className="ico-logo">
              <img
                src="./images/logosecundario.png"
                id="icon"
                alt="User Icon"
              />
              </div>
              </Link>
            </div>

            <form  onSubmit={manejadorSubmit} className="form-login">
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="usuario"
                placeholder="Nombre de Usuario"
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="Password"
              />
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
              <a className="underlineHover" href="/">
                Olvido su contraseña?
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUpUsers;
