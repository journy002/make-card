import React, { useState } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

function Maker({ FileInput }) {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Mun Seok",
      company: "Naver",
      title: "Frontend engineer",
      theme: "dark",
      email: "journy002@naver.com",
      message: "Go for it",
      fileName: null,
      fileURL: null,
    },
  });

  const onUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  return (
    <div className={styles.maker}>
      <Header />
      <div className={styles.card__container}>
        <Editor FileInput={FileInput} cards={cards} onUpdate={onUpdate} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </div>
  );
}
export default Maker;
