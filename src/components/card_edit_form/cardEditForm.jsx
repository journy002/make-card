import React from "react";
import Button from "../button/button";
import styles from "./cardEditForm.module.css";

function CardEditForm({ card }) {
  const { name, company, title, theme, email, message, fileName, fileURL } =
    card;
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
      />
      <input
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
      />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
      />
      <Button name="Delete" />
    </form>
  );
}
export default CardEditForm;
