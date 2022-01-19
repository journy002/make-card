import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path={"/"} element={<Login />} />
          <Route path="/maker" element={<Maker FileInput={FileInput} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
