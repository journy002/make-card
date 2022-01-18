import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./cardEditForm.module.css";

function CardEditForm({ card, onUpdate }) {
  const { name, company, title, theme, email, message, fileName, fileURL } =
    card;

  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    event.preventDefault();
    onUpdate({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
        onChange={onChange}
      />
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
        onChange={onChange}
      />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        defaultValue={message}
        onChange={onChange}
      />
      <Button name="Delete" />
    </form>
  );
}
export default CardEditForm;
