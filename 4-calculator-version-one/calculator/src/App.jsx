import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input type="text" className={styles.display} />
      <div className={styles.buttons - container}>
        <button>C</button>
      </div>
    </div>
  );
}

export default App;
