import React from "react";
import CardEditForm from "../card_edit_form/cardEditForm";
import styles from "./editor.module.css";

function Editor({ cards, onUpdate }) {
  return (
    <ul className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm key={key} card={cards[key]} onUpdate={onUpdate} />
      ))}
    </ul>
  );
}
export default Editor;
