import Screen from "./components/Screen";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <>
    <h1>CALCIFY</h1>
      <div className={styles.calculator}>
        <Screen />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
