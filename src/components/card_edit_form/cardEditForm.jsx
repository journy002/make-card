import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/imageFileInput";
import styles from "./cardEditForm.module.css";

function CardEditForm({ card }) {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;

  const onSubmit = () => {};
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
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option defaultValue="dark">dark</option>
        <option defaultValue="light">light</option>
        <option defaultValue="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
      />
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
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
}
export default CardEditForm;
