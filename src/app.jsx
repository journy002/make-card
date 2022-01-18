import styles from "./app.module.css";
import Maker from "./components/maker/maker";

function App({ FileInput }) {
  return (
    <div className={styles.container}>
      <Maker FileInput={FileInput} />
    </div>
  );
}

export default App;
