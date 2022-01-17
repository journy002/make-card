import styles from './app.module.css';
import Maker from './components/maker/maker';

function App() {

  return (
    <div className={styles.container}>
      <Maker/>
    </div>
  );
}

export default App;
