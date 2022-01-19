import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

export default function Login() {
  const history = useNavigate();

  return (
    <div className={styles.login}>
      <div>
        <h2 className={styles.title}>Welcome!</h2>
        <button className={styles.button} onClick={() => history("/maker")}>
          Click Me!
        </button>
      </div>
    </div>
  );
}
