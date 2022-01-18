import React from "react";
import styles from "./card.module.css";

function Card({ card }) {
  const { name, company, title, theme, email, message, fileName, fileURL } =
    card;

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <input className={styles.input} type="text" name="title" value={title} />
      <select className={styles.select} name="theme" value={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name="message" value={message} />
    </form>
  );
}
export default Card;
