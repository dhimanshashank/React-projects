import styles from "./App.module.css";
import Screen from "./components/Screen";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Screen />

        <div className={styles.buttons}>
          <div className={styles.row}>
            <button className={styles.button}>AC</button>
            <button className={styles.button}>+/-</button>
            <button className={styles.button}>%</button>
            <button className={styles.button}>/</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
