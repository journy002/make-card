import React from "react";
import CardEditForm from "../card_edit_form/cardEditForm";
import styles from "./editor.module.css";

function Editor({ cards }) {
  return (
    <ul className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </ul>
  );
}
export default Editor;
