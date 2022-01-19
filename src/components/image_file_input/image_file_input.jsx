import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

export default function Image_file_input({
  imageUploader,
  name,
  onFileChange,
}) {
  // 로딩 스피너
  const [loading, setLoading] = useState(false);

  // 버튼이 클릭 됐을때 inputRef를 이용해서 input이 클릭되는 로직 구현
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  // img 파일을 불러오는 로직
  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
}
