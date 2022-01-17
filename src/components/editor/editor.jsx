import React from "react";
import CardAddForm from "../card_add_form/cardAddForm";
import CardEditForm from "../card_edit_form/cardEditForm";
import styles from "./editor.module.css";

function Editor({ cards, onSubmit }) {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onSubmit={onSubmit} />
    </div>
  );
}
export default Editor;
