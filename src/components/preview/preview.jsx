import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

function Preview({ cards }) {
  return (
    <ul className={styles.preview}>
      <h1>Preview</h1>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} />
      ))}
    </ul>
  );
}
export default Preview;
