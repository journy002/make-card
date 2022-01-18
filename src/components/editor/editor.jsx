import React from "react";
import CardAddForm from "../card_add_form/cardAddForm";
import CardEditForm from "../card_edit_form/cardEditForm";
import styles from "./editor.module.css";

function Editor({ cards, onUpdate, FileInput }) {
  return (
    <ul className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          onUpdate={onUpdate}
        />
      ))}
      <CardAddForm FileInput={FileInput} onUpdate={onUpdate} />
    </ul>
  );
}
export default Editor;
