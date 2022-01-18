import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./cardEditForm.module.css";

function CardEditForm({ FileInput, card, onUpdate }) {
  const { name, company, title, theme, email, message, fileName, fileURL } =
    card;

  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // 이미지 파일 변경
  const onFileChange = (file) => {
    onUpdate({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
    console.log(file, "file");
  };

  // card의 name, value값 업데이트
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
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        defaultValue={theme}
      >
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
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onFileChange={onFileChange} />
    </form>
  );
}
export default CardEditForm;
