import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validate";

export default function Form(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    //console.log(userData)

    setErrors(validate({ ...userData, [name]: value }));
    //console.log(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //previene el comportamiento estatico de los forms
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.form_group}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            placeholder="enter your username"
            onChange={(e) => handleInputChange(e)}
          ></input>
        </div>

        <div className={styles.form_group}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            input
            placeholder="enter your password"
            value={userData.password}
            onChange={(e) => handleInputChange(e)}
          ></input>
          <div>
            <button type="submit">Log in</button>
          </div>
          <div>
            <p className={styles.errors}>
              {errors.password ? errors.password : null}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
